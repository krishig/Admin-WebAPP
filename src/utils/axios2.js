import axios from "axios"


const instance = axios.create({
    baseURL:"https://13.200.56.10:9090",
    httpsAgent: {
        rejectUnauthorized: false,
      }
    
})

export default instance