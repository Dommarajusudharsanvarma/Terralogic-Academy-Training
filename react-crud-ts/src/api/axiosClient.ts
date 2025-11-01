import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{
        "content-Type": "application/json",
    }
});


export default axiosClient;