import axios from "axios";

//Server Backend Configure
export const Server = axios.create({
    baseURL : "https://projectfinnyt-server.vercel.app/",
    withCredentials : true
})