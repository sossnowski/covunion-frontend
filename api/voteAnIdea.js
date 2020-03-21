import axios from "axios";
import endpoints from "../endpoints";


module.exports = (ideaToVote) => {
    return new Promise((resolve, reject) => {
        axios.patch(endpoints.voteAnIdea, {ideaId: ideaToVote.ideaId, name: endpoints.headers.headers.Authorization}, endpoints.headers)
            .then((res) => {
                resolve(res.data)
            })
            .catch(er => reject(er));
    });
};