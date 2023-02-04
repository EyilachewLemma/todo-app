import axios from "axios";
let apiClient = axios.create({
    baseURL:'https://todoapp-s2ip.onrender.com',
        'Content-Type': 'application/json',

})



export default apiClient
