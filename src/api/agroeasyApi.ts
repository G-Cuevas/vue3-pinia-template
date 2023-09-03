import axios from "axios";

const agroeasyApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default agroeasyApi;