import { useEffect, useState } from "react";
import "./timePicker.scss";

export const TimePicker = ({ onValueChanged }) => {

    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");


    useEffect(() => {
        onValueChanged(`${hour || "00"}:${minute || "00"}`);
    }, [hour, minute]);

    const handleChange = (e) => {
        const value = e.target.value;
        if (!isNaN(Number(value))) {
            if (e.target.name === "hour" && value < 24 && value >= 0 && value.length <= 2) {
                setHour(value);
            } else if (e.target.name === "minute" && value < 60 && value >= 0 && value.length <= 2) {
                setMinute(value);
            }
        }
    }
    const handleBlur = (e) => {
        const value = e.target.value;
        let updatedHour = hour;
        let updatedMinute = minute;

        if (e.target.name === "hour" && hour.length === 1) {
            updatedHour = "0" + hour;
        }
        if (e.target.name === "minute" && minute.length === 1) {
            updatedMinute = "0" + minute;
        }

        setHour(updatedHour);
        setMinute(updatedMinute);
    };



    return (
        <>
            <div className="time-picker-cont">
                <input onBlur={handleBlur} name="hour" placeholder="00" type="text" value={hour} onChange={handleChange} />
                <h3 className="semi-colon">:</h3>
                <input onBlur={handleBlur} name="minute" placeholder="00" value={minute} onChange={handleChange} type="text" />
            </div>

        </>
    )
}