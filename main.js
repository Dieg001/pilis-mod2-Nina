// Pronostico del Tiempo - API OpenWeather
const apiKey = '67640b36e39ba8c1f477fbe99a48ba91';
let city = 'San Salvador de Jujuy';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Solicitud Fallida', err))