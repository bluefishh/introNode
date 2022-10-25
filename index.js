const axios = require("axios"); // Llamamos nuestra librería Axios para las peticiones HTTP.
console.log("Hello World");

// Declaramos 2 variales, apiKey con la key que nos genera OpenWeather para poder consumirla y city en la que vamos a colocar la ciudad de la que deseamos obtener datos climáticos, en este caso Bogotá.
let apiKey = "4e59698163608e4e6bc2176bf77e8491";
let city = "Bogota, col"; // Según la documentación, debemos usar la norma ISO 3166 para poder establecer correctamente la ciudad.

// Creamos un objeto requestConfig que llevará los Query Params que se comunican con la API.
let requestConfig = {
    url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey,
};

// console.log(requestConfig);

// Creamos un objeto de tipo promesa Axios para enviar el objeto requestConfig y poder manejar la promesa.

let objPromesa = axios(requestConfig);

objPromesa
    .then(function (response) {
        // response nos trae todos los datos de la respuesta de la petición.
        // response.data -> son los datos que envia la API
        console.log(
            // Se coloca response.data.main.temp para traer la temperatura actual, se puede revisar que trae cada parte en la documentación de la API aquí: https://openweathermap.org/current
            "La temperatura en Bogotá, Colombia, es de: " +
                (response.data.main.temp - 273.15).toFixed(2).toString() +
                "°C"
            // Se le restan -273.15 a la temperatura debido a que viene en Kelvin, entonces se convierte a Celcius con esta resta. .toFixed(2) nos deja únicamente 2 decilames después del punto y toString() nos pasa la información a String para poderla mostrar.
        );
    })
    // Manejamos el error si la promesa no se ejecuta correctamente.
    .catch(function (err) {
        console.log(err);
    });
