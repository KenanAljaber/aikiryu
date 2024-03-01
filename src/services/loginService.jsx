import interceptor from "../interceptor/interceptor";
import { BASE_URL } from "../utils/constants";

export default {
    login
}

async function login(data) {
    const axios=interceptor.getInstance();
    try {
        const response = await axios.post(`${BASE_URL}/admin/login`, data);
        if (response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.log(error);
    }

}