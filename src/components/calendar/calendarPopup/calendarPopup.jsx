import React, { useEffect, useState } from 'react';
import "./calendarPopup.scss";
import Map from '../../map/map';
import { CONSTANTS } from '../../../utils/constants';
import { useAuth } from '../../../services/authenticationService';
import eventService from '../../../services/eventService';
const CalendarPopup = ({ event, togglePopup, onEventUpdate }) => {

    const [marker, setMarker] = useState(null);
    const [suspended, setSuspended] = useState(event.is_suspended);
    const [color, setColor] = useState(event.color);
    const [zoomedPosition, setZoomedPosition] = useState(null);
    const auth = useAuth();
    const editable = auth.isAuthenticated && event.end > new Date();

    useEffect(() => {


        if (event.location) {
            if (event.location.toLowerCase().includes("le havre")) {
                setMarker(CONSTANTS.coords.leHavre);
                setZoomedPosition(CONSTANTS.coords.leHavre.coords);
                // console.log(`its a le havre`);

            } else {
                // console.log(`its not a le havre`);
                setMarker(CONSTANTS.coords.goderVille);
                setZoomedPosition(CONSTANTS.coords.goderVille.coords);
                // console.log(zoomedPosition);
            }
        }
        // console.log(event);
        // console.log(marker);
    }, [marker]);

    const updateSchedule = async () => {
        const data = {
            id: event.id,
            is_suspended: suspended
        }
        event.is_suspended = suspended;
        event.color = color;
        await eventService.updateSchedule(data);
        console.log("updated");
        onEventUpdate(event);
    }


    return (
        <>
            <div className="popup-block" onClick={e => {
                //check if the click was on the popup
                if (e.target.className == "popup-block") {

                    togglePopup();
                }

            }}>
                <div className="popup">
                    <div className="popup-content">


                        <div className="mark" style={{ backgroundColor: color }}>

                        </div>
                        <div className="header">

                            <h1>{event.title}</h1>
                            <p>Date: {event.date.split('T')[0]}</p>
                            {suspended && <p className='suspended'>Suspendu</p>}
                        </div>
                        <div className="body">
                            <div className="time">
                                <p>Commence: {event.start_time}</p>
                                <p className='end-time'>Termine: {event.end_time}</p>

                            </div>
                            {editable &&
                                <div className="suspendClass">
                                    <p>Suspendre</p>
                                    <label className="switch">

                                        <input type="checkbox" checked={suspended} onChange={(e) => {
                                            setSuspended(e.target.checked);
                                            setColor(e.target.checked ? "red" : event.end < new Date() ? '#525252' : 'green');
                                        }} />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            }
                            {
                                marker && zoomedPosition &&
                                <div className="map">
                                    <p>{event.location}</p>
                                    <Map marks={[marker]} zoomLevel={12}  zoomedPositionProp={zoomedPosition} height='200px' width='300px' />

                                </div>
                            }
                            {editable && <button className="update-btn black-button"
                                onClick={() => updateSchedule()}>Actualiser</button>}
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default CalendarPopup;