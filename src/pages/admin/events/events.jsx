import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/authenticationService";
import "./events.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { TimePicker } from "../../../components/timePicker/timePicker";


export const Events = () => {

    const auth = useAuth();
    const navigator = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    useEffect(() => {
        console.log(startTime);
    }, [startTime])

    return (
        <>
            <div className="main-cont-event">

                <h1>Évenements</h1>
                <div className="outer-cont-grid">
                <div className="events-panel-cont">
                    <div className="grid-item">
                        <h3>Date de commencement</h3>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}></DatePicker>
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
                </div>
                <button className="add-event-btn">Ajouter</button>
  
                </div>
                          </div>
        </>
    );
};