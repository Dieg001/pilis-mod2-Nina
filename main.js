// Pronostico del Tiempo - Conectar API OpenWeather y escribir los datos en Console y HTML
const apiKey = '67640b36e39ba8c1f477fbe99a48ba91';
const lat = -24.18334917354313;
const lon = -65.33130863149752;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Declara Variable de Datos.
        const ciudad = data.name;
        const pais = data.sys.country;
        const clima = data.weather[0].description;
        const icono = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;
        let temperatura = parseInt(data.main.temp);
        let humedad = data.main.humidity;

        // Modificar texto de clima
        const descripcion_string = clima.toString(); // Transformar Array de data.weather[] en String
        const descripcion_palabras = descripcion_string.split(" "); // Separar en palabras
        for (let i = 0; i < descripcion_palabras.length; i++) { // Poner en Mayúscula la primera letra de cada palabra.
            descripcion_palabras[i] = descripcion_palabras[i][0].toUpperCase() + descripcion_palabras[i].substr(1);
        }

        const descripcion_unidos = descripcion_palabras.join(" "); // Unir las palabras entre espacios.

        // Ver Datos en Console.
        /*
        console.log(data); // Todos.
        console.log("Ciudad: " + ciudad)
        console.log("País: " + pais)
        console.log("Temperatura: " + temperatura)
        console.log("Humedad: " + humedad + "%")
        console.log("Clima: " + descripcion_unidos)
        console.log("Icono: " + icono)
        */

        // Ver Datos en HTML.
        // Introducir logotipos de climas.
        let iconApp = document.createElement('img');
        iconApp.src = icono;
        document.getElementById("app-icon").appendChild(iconApp); // Icono

        // Reconocer Elementos HTML.
        let titleApp = document.getElementById("app-title"); // Título (Ciudad + País)
        let tempApp = document.getElementById("app-temp"); // Temperatura
        let humApp = document.getElementById("app-hum"); // % de Humedad
        let descApp = document.getElementById("app-desc"); // Descripción

        // Introducir los datos en los elementos.
        titleApp.textContent = "Ciudad Cultural, " + ciudad + ", " + pais;
        tempApp.textContent = "Temperatura: " + parseInt(temperatura) + "º C";
        humApp.textContent = "Humedad: " + humedad + "%";
        descApp.textContent = "Clima: " + descripcion_unidos;
    })
    .catch(err => console.log('Solicitud Fallida', err))
/*
¡TESTEO! Solo Dios sabe que quise hacer ahí...

async function getName(){
    let response = await fetch(url);
    let weatherData = await response.json;
    return console.log(weatherData.name);
}
*/

function onClick (event) {
    event.preventDefault();
    this.style.backgroundColor = "black";
    console.log("click...");
    console.log(event);
}
  
const mensaje = {
    solicitante: document.getElementById('solicitante').value,
    cuit: document.getElementById('cuit').value,
    email: document.getElementById('email').value,
    telefono: document.getElementById('telefono').value
}
console.log(mensaje);

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => { 
        console.log(json);
        Swal.fire(
            'Enviado',
            'Gracias por tu comentario',
            'success'
        );
        cleanForm();})

        .catch((err) => console.log(err));

        let boton = document.getElementById("enviar");
        boton.addEventListener("click", onClick);
