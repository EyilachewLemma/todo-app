import axios from "axios";
let apiClient = axios.create({
    // baseURL:'https://todoapp-s2ip.onrender.com',
    baseURL:'http://127.0.0.1:5000/api/',
    headers:{
        'Content-Type': 'application/json',
    }
        

})



export default apiClient
