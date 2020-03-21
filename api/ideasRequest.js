import axios from "axios";
import endpoints from "../endpoints";


module.exports = () => {
    return new Promise((resolve, reject) => {
        axios.get(endpoints.getAllIdeas, endpoints.headers)
            .then((res) => {
               resolve(res.data)
            })
            .catch(er => reject(er))
    });
};