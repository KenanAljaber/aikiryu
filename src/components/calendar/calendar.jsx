import { useEffect, useState } from "react";
import eventService from "../../services/eventService";
import CalendarPopup from "./calendarPopup/calendarPopup"
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
const MyCalendar = ({ }) => {

    const [schedules, setSchedules] = useState(null);
    const [date, setDate] = useState({ day: moment().date()-1, month: new Date().getMonth(), year: new Date().getFullYear() });
    const [selectedEvent, setSelectedEvent] = useState(null);

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
    }, [date]);

    const eventStyleGetter = (event, start, end, isSelected) => {
        let style = {
            backgroundColor: event.is_suspended ? 'red' : 'green', // Set color based on is_suspended property
            borderRadius: '0px',
            border: 'none',
            color: 'white',
            display: 'block',
        };

        // Check if the event has passed
        if (new Date(event.end) < new Date()) {
            style.backgroundColor = 'gray'; // Change color to red for passed events
        }

        return {
            style: style
        };
    };
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
                    defaultDate={new Date()}
                    style={{ height: "100vh" }}
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