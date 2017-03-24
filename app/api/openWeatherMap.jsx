var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f8ce2c8eba7b17ce709631921bc30f64'; 

// f8ce2c8eba7b17ce709631921bc30f64

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=imperial`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}