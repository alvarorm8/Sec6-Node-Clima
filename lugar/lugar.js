//https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New+York

/*
Existen 2 principales librerías para peticiones de servicios
REST, axios y request.

La principal diferencia es que axios trabaja en base a promesas
y request en base a callbacks

Al hacer las peticiones podemos poner los argumentos sin comillas
o con dobles comillas (en caso de ser palabras), si tiene más de una palabra
como New York hay que ponerlo con comillas dobles, así que es mejor 
acostumbrarse a siempre ponerlos con comillas dobles.
*/

const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    //    console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'fdfe8af374mshae214a9c73d976dp15b653jsn4b6baf1636bf' }
    });

    // instance.get()
    //     .then(resp => {
    //         //console.log(resp);
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!', err);
    //     })
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados de localización para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}


/*
Cuando se devuelve la respuesta del servidor hay mucha información,
pero lo que nos interesa es al principio donde nos devuelve el status 
de la petición (200 = OK, 404 = Url not found, etc.) y al final donde 
devuelve los datos.
*/