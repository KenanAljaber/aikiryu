import axios from "axios"
import { BASE_URL, CONSTANTS } from "../utils/constants";

export default {
    create
}

async function create(data) {

    try {
        console.log('sending request');
        console.log(`${BASE_URL}/event`);
        const response = await axios.post(`http://localhost:8080/api/event`, data, {
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