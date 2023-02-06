import axios from "axios"

const instances = axios.create({
    baseURL:"http://localhost:8001"
    // baseURL:"https://tarufoundationremakebackend.netlify.app"
})

export default instances;