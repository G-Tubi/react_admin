import axios from "axios";

export default function ajax(url, data = {}, methods = 'Get') {
        if (methods === 'Get') {
            return axios.get(url, { params: data })
        }else {
            return axios.post(url,data)
        }   
}