import interceptor from "../interceptor/interceptor";
import { BASE_URL, CONSTANTS } from "../utils/constants";

export default {
    create,
    getEvents,
    updateSchedule

}

async function create(data) {
    const axios = interceptor.getInstance();
    try {
        // console.log('sending request');
        // console.log(`${BASE_URL}/event`);
        const response = await axios.post(`${BASE_URL}/event`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem(CONSTANTS.TOKEN)

            }
        });
        if (response.status === 200) {
            return response;
        }
        return null;
    } catch (error) {
        console.log(error);
    }

}

async function getEvents(day, month, year, limit = 14, offset = 0) {
    try {

        const axios = interceptor.getInstance();
        const response = await axios.get(`${BASE_URL}/event/schedule?day=${day}&month=${month}&year=${year}&limit=${limit}&offset=${offset}`, {
        });
        if (response.status === 200) {
            const convertedEvents = convertEvents(response);
            const updatedResponse = {
                ...response,
                data: convertedEvents
            }
            return updatedResponse;

        }
    } catch (error) {
    }

}

async function updateSchedule(data) {
    const axios = interceptor.getInstance();
    try {
        // console.log('sending request');
        // console.log(`${BASE_URL}/event`);
        const response = await axios.put(`${BASE_URL}/event/schedule/${data.id}`, data);
        if (response.status === 200) {
            return response;
        }
    } catch (error) {
        console.log(error);
    }
}

function convertEvents(events) {
    const convertedEvents = events.data.map(schedule => {
        // Parse time strings
        const startTime = schedule.start_time.split(':').map(str => parseInt(str));
        const endTime = schedule.end_time.split(':').map(str => parseInt(str));

        // Set date objects with parsed time
        const startDateTime = new Date(schedule.date);
        startDateTime.setHours(startTime[0], startTime[1], startTime[2] || 0);

        const endDateTime = new Date(schedule.date);
        endDateTime.setHours(endTime[0], endTime[1], endTime[2] || 0);

        return {
            id: schedule.id,
            start: startDateTime,
            end: endDateTime,
            title: schedule.name,
            location: schedule.location,
            is_suspended: schedule.is_suspended,
            start_time: schedule.start_time,
            end_time: schedule.end_time,
            date: schedule.date,
            color: schedule.is_suspended ? 'red' : endDateTime < new Date() ? '#525252' : 'green'
        };
    });
    return convertedEvents;
}