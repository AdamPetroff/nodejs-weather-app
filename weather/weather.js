const request = require('request');

let getWeather = (lat, lng, callback) => {
    var url = `https://api.darksky.net/forecast/e2ba631becae9584dda5cef92f1dd3fe/${lat},${lng}?units=si`;
    request({
        url: url,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            let weather = {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            };

            callback(undefined, weather);
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;