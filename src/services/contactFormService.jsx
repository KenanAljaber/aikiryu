import interceptor from "../interceptor/interceptor";
import { BASE_URL } from "../utils/constants";
// import axios from "axios";


export default {
    sendContact
}



async function sendContact(data) {
    const axios=interceptor.getInstance();
    try {
        console.log('sending request');
        const response = await axios.post(`${BASE_URL}/contact`, data);
        console.log(response);
        if (response.status === 200) {
            return response;
        }
        return null;
    } catch (error) {
        console.log(error);
    }
}





