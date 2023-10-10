import axios from "axios"


const instance = axios.create({
    baseURL:"http://13.200.56.10:5000/python",
   
    
})

export default instance