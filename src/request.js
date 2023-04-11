import axios from "axios";

export const getToken =async() => {
    try {
        const res = await  axios({
            method: 'post',
            url: `${window.env.ACCESS_API_URL}api/v3/clients/accesstoken`,
            headers: {'AccessKey': `${window.env.ACCESS_KEY}`},
            data: {
                "idClient": `${window.env.CLIENT_ID}`,
                "accessToken": "",
                "paramName": "device",
                "paramValue": `${window.env.DEVICE_ID}`,
                "latitude": 0,
                "longitude": 0,
                "sourceQuery": 0
            }
        })
        return res
    }   catch (error) {
        console.log(error)
    }
}

export const getBonus =async(token) => {
    try {
        const res = await  axios({
            url: `${window.env.BONUS_API_URL}api/v3/ibonus/generalinfo/${token}`,
            headers: {'AccessKey': `${window.env.ACCESS_KEY}`},
        })
        return res
    }   catch (error) {
        console.log(error)
    }
}
   