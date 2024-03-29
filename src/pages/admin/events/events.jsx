import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/authenticationService";
import eventService from "../../../services/eventService";
import "./events.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { TimePicker } from "../../../components/timePicker/timePicker";
import { useInfoMessage } from "../../../context/infoMessageContext";
import InfoMessage, { InfoType } from "../../../components/infoMessage/infoMessage";
import MyCalendar from "../../../components/calendar/calendar";


export const Events = () => {

    const auth = useAuth();
    const navigator = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [eventName, setEventName] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const locations = ["Le Havre", "Goderville"];
    const [days, setDays] = useState([]);
    const SELECT_OPTION = "Seleccionner";
    const { showToast } = useInfoMessage();
    useEffect(() => {
        console.log(startTime);
    }, [startTime]);

    const handleSubmit = async () => {
        if(!selectedLocation || selectedLocation==SELECT_OPTION){
            showToast("Veuillez renseigner une location", InfoType.ERROR);
            return;
        }
        if (eventName === "" || startTime === "" || endTime === "" || !startDate || !endDate || days.length === 0) {
            showToast("Veuillez renseigner tous les champs", InfoType.ERROR);
            return;
        }
        if(startTime > endTime || (startTime === endTime)) {
            showToast("Veuillez renseigner une heure valide", InfoType.ERROR);
            return;
        }
        // Format dates in ISO 8601 format
        const formattedStartDate = startDate.toISOString();
        const formattedEndDate = endDate.toISOString();

        const event = {
            name: eventName,
            start_date: formattedStartDate,
            end_date: formattedEndDate,
            start_time: startTime,
            end_time: endTime,
            days: days,
            location: selectedLocation
        };
        console.log(event);

        console.log(event);
        // Now you can send the event object to your backend
        const resp = await eventService.create(event);
        if (!resp) {
            showToast("Si't vous plait renseigner tous les champs", InfoType.ERROR);
            return;
        }
        if (resp.status && (resp.status === 200 || resp.status === 201)) {
            showToast("EVENEMENT CREE", InfoType.SUCCESS);
        }

    };
    const addDay = (day) => {
        if (days.includes(day)) {
            setDays(days.filter((d) => d !== day));
            return;
        }
        setDays([...days, day]);
    }


    return (
        <>
            <div className="main-cont-event">

                <h1>Évenements</h1>
                <div className="outer-cont-grid">
                    <div className="events-panel-cont">
                        <div className="title-cont grid-item">
                            <p>Titre</p>
                            <input type="text" placeholder="Nom de l'évenement" className="grid-item" onChange={(e) => setEventName(e.target.value)} />
                        </div>

                        <div className="location-cont grid-item">
                            <p>Localisation</p>
                            <select name="location" id="location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                                <option value={SELECT_OPTION}>{SELECT_OPTION}</option>
                                {locations.map((location) => (
                                    <option key={location} value={location}>{location}</option>
                                ))}

                            </select>
                        </div>

                        <div className="grid-item">
                            <h3>Date de commencement</h3>
                            <DatePicker dateFormat={"dd/MM/yyyy"} selected={startDate} onChange={(date) => setStartDate(date)}></DatePicker>
                        </div>
                        <div className="grid-item">
                            <h3>Date de fin</h3>
                            <DatePicker selected={endDate} onChange={(date) => {
                                console.log(date);
                                setEndDate(date)
                            }}></DatePicker>
                        </div>
                        <div className="grid-item">
                            <h3>Temps de commencement</h3>
                            <TimePicker onValueChanged={(e) => setStartTime(e)}></TimePicker>
                        </div>
                        <div className="grid-item">
                            <h3>Temps de fin</h3>
                            <TimePicker onValueChanged={(e) => setEndTime(e)}></TimePicker>
                        </div>
                        <div className="days one-column">
                            <h3>Jours</h3>
                            <div className="days-cont">


                                <div className="day-item">Lundi <input onClick={() => addDay(1)} type="checkbox" name="day" id="day" value="1" /></div>
                                <div className="day-item">Mardi <input onClick={() => addDay(2)} type="checkbox" name="day" id="day" value="2" /></div>
                                <div className="day-item">Mercredi <input onClick={() => addDay(3)} type="checkbox" name="day" id="day" value="3" /></div>
                                <div className="day-item">Jeudi <input onClick={() => addDay(4)} type="checkbox" name="day" id="day" value="4" /></div>
                                <div className="day-item">Vendredi <input onClick={() => addDay(5)} type="checkbox" name="day" id="day" value="5" /></div>
                                <div className="day-item">Samedi <input onClick={() => addDay(6)} type="checkbox" name="day" id="day" value="6" /></div>
                                <div className="day-item">Dimanche <input onClick={() => addDay(7)} type="checkbox" name="day" id="day" value="7" /></div>
                            </div>
                        </div>
                        <button className="add-event-btn one-column" onClick={async () => {
                            await handleSubmit();
                        }}>Ajouter</button>
                    </div>

                </div>
                <MyCalendar/>
            </div>
        </>
    );
};