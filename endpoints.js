import api from "./api"


let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2Jyem9za2E5N0BnbWFpbC5jb20iLCJpYXQiOjE1ODQ3MTQ1ODcsImV4cCI6MTU4NTMxOTM4N30.-7IpIpV-YX3eneuHC2zG518WPSvDIRNXxE4e4Q2O_xg"

    const headers = {
        "Authorization" : `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': '*/*'
    }


export default {
    headers: {
        headers: {
            "Authorization" : `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }

    },
    getAllMyTasks: api + "market/allMyTasks",
    getAllIdeas: api + "idea/allIdeas",
    voteAnIdea: api + "idea/vote"
}