import axios from "axios";

//Server Backend Configure
export const Server = axios.create({
    baseURL : "https://finnyt-pj-server.vercel.app",
    withCredentials : true
})