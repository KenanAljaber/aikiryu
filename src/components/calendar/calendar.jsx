import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import CalendarPopup from "./calendarPopup/calendarPopup"
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './calendar.scss';
const MyCalendar = ({ onRefresh=null }) => {

    const [schedules, setSchedules] = useState(null);
    const [date, setDate] = useState({ day: moment().date()-1, month: new Date().getMonth(), year: new Date().getFullYear() });
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                eventService.getEvents(date.day, date.month, date.year).then((response) => {
                    if (!response || response.status !== 200) {
                        setSchedules([]);
                        return;
                    }

                    setSchedules(response.data);
                });
            } catch (error) {
                // Handle error
                console.log(error);
            }
        };

        fetchSchedules();
    }, [date, onRefresh]);
    
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        }

    window.addEventListener('resize', handleResize);

    const eventStyleGetter = (event, start, end, isSelected) => {
        // console.log(`isMobile: ${isMobile}`);
        let style = {
            backgroundColor: event.is_suspended ? 'red' : 'green', // Set color based on is_suspended property
            borderRadius: '0px',
            border: 'none',
            color: 'white',
            display: 'block',
        };
        //mobile view
        if (isMobile) {
            style.backgroundColor = event.is_suspended ? 'red' : 'green'; // Set color based on is_suspended property
            style.borderRadius = '0px';
            style.border = 'none';
            style.color = 'white';
            style.display = 'block';

        }

        // Check if the event has passed
        if (new Date(event.end) < new Date()) {
            style.backgroundColor = 'gray'; // Change color to red for passed events
        }

        return {
            style: style
        };
    };

    const dayPropGetter = (date) => {
        let style={};
        if(isMobile){
            style={
                width: '100%',
            }
        }
    }
    const localizer = momentLocalizer(moment);

    return (
        <>
            <div className="calendar-cont">
                {schedules!=null && <Calendar
                    localizer={localizer}
                    events={schedules}
                    eventPropGetter={eventStyleGetter}
                    defaultView="week"
                    startAccessor="start"
                    endAccessor="end"
                    popup={true}
                    dayPropGetter={dayPropGetter}
                    defaultDate={new Date()}
                    style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                    showMultiDayTimes={true}
                    views={['week']}
                    step={60}
                    // timeslots={2}
                    titleAccessor="title"
                    onNavigate={(date, { start, end }, navigationAction) => {

                        setDate({ day: date.getDate() - 1, month: date.getMonth(), year: date.getFullYear() })
                    }}
                    onSelectEvent={(event) => {
                        setSelectedEvent(event);
                    }}

                />}

                {selectedEvent && <CalendarPopup event={selectedEvent} onEventUpdate={(event) => {
                    setSchedules((prevSchedules) => {
                        const updatedSchedules = prevSchedules.map((schedule) => {
                            if (schedule.id === event.id) {
                                return event;
                            }
                            return schedule;
                        });
                        return updatedSchedules;
                    });
                 }} togglePopup={() => setSelectedEvent(null)} />} {/* Render EventPopup if selectedEvent is not null */}
            </div>
        </>
    )
}

export default MyCalendar