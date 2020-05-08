const argv = require('./config/yargs').argv;
const getLugar = require('./lugar/lugar');
const getTemp = require('./clima/clima');

// const lugar = getLugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))

// getTemp.getClima(40.419998, -3.700000)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))

const getInfo = async(direccion) => {

    try {
        const lugar = await getLugar.getLugarLatLng(direccion);
        const temp = await getTemp.getClima(lugar.lat, lugar.lng);

        return `El clima de ${lugar.direccion} es de ${temp} grados celsius.`
    } catch (e) {
        return ` No se pudo determinar el clima para ${direccion}`
    }


}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))