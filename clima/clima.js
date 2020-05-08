const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0588a5567c1d4953c98cf4547f5beff2&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}