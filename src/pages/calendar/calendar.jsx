import React from 'react'
import './calendar.scss'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

export const CalendarPage = () => {

    const localizer = momentLocalizer(moment);

    const events = [
        {
            start: new Date(2023, 0, 1, 10, 0), 
            end: new Date(2023, 0, 1, 12, 0),   
            title: 'Event 1',
        },
        {
            start: new Date(2023, 0, 2, 14, 0),  
            end: new Date(2023, 0, 2, 16, 0),    
            title: 'Event 2',
        },

    ];

    return (
        <>
            <div className="general-cont-calendar">
                <div className="header">
                    <h1>Calendrier de Cours</h1>
                    <p>Consultez notre calendrier pour connaître les horaires de nos cours et événements.</p>

                </div>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    titleAccessor="title"
                />

            </div>
        </>
    )
}