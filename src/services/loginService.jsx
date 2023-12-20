import axios from "axios"
import { BASE_URL } from "../utils/constants";

export default {
    login
}

async function login(data) {

    try {
        const response = await axios.post(`${BASE_URL}/admin/login`, data);
        console.log(response);
        if (response.status === 200) {
            return response;
        }
        return null;
    } catch (error) {
        console.log(error);
    }

}