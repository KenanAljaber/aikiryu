
import MyCalendar from '../../components/calendar/calendar';
import Calendar from '../../components/calendar/calendar';
import './calendarPage.scss'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const CalendarPage = () => {





    return (
        <>
            <div className="general-cont-calendar">
                <div className="header">
                    <h1>Calendrier de Cours</h1>
                    <p>Consultez notre calendrier pour connaître les horaires de nos cours et événements.</p>

                </div>
                <MyCalendar />

            </div>
        </>
    )
}

export default CalendarPage