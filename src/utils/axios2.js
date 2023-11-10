import axios from "axios"


const instance = axios.create({
    baseURL:"http://13.200.56.10:9090",
   
    
})

export default instance