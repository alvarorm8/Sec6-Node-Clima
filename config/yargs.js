//yargs me permite añadir directamente opciones para no tener que poner un nombre de comando
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            description: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}