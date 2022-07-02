import axios from 'axios';

export default axios.create({
    baseURL: "http://23.88.43.148",
    headers: {
        "Content-type": "application/json"
    }
})