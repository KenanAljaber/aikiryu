import axios from "axios"
import { BASE_URL, CONSTANTS } from "../utils/constants";

export default {
    create,
    getEvents
}

async function create(data) {

    try {
        console.log('sending request');
        console.log(`${BASE_URL}/event`);
        const response = await axios.post(`${BASE_URL}/event`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem(CONSTANTS.TOKEN)

            }
        });
        // if (response.status === 200) {
        //     return response.data;
        // }
        return null;
    } catch (error) {
        console.log(error);
    }

}

async function getEvents ({limit=10, offset=0}) {
    const response= await axios.get(`${BASE_URL}/event?limit=${limit}&offset=${offset}`,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(CONSTANTS.TOKEN)
        }
    });

}