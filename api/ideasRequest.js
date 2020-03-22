import axios from "axios";
import endpoints from "../endpoints";


module.exports = () => {
    return new Promise((resolve, reject) => {
        console.log(endpoints.getAllIdeas)
        axios.get(endpoints.getAllIdeas, endpoints.headers)
            .then((res) => {
                console.log(res)
               resolve(res.data)
            })
            .catch(er => reject(er));
    });
};