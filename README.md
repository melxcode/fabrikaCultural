1 Para cambiar la mayoria de los textos de la pagina se puede hacer entrando a src/data/Textos.json y cambiarlos ahi

2 Para cambiar el whatsapp al que se comunica al boton ir a src/data/datos y cambiar el numero

3 Para agregar una nueva casa ir a src/store/reducers/propertyReducer.js dentro de la lista properties:[] hay muchas casas.. ir al final de la lista , agregar una ,
y agregar la nueva casa

{
id: "7", //el identificador de la casa
nombre: "Oportunidad Espaciosa Casa de categoria ", //Esto es una oracion entre comillas
precio: 40000, //Numero sin comas ni puntos ni comillas
archivos: [ // esto son las fotos , luego de subir la foto en www.imgbb.com y agarrar el "direct link" , ponerlo aca entre comillas y separados por comas
"https://i.ibb.co/59Dc54N/casa-4.jpg",
"https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1489370321024-e0410ad08da4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://i.ibb.co/P92683j/Whats-App-Image-2021-04-11-at-15-45-21.jpg",
],
video: "https://www.youtube.com/embed/H6SZuAcqeW8", //para agregar un video.. ir al video de youtube->compartir->insertar -> agarrar el src del texto que te dan
fotoPrincipal:
"https://i.ibb.co/P92683j/Whats-App-Image-2021-04-11-at-15-45-21.jpg", //aca pones la foto que mas te guste de la lista de archivos para que aparezca en la tarjeta en el listado
zona: "merlo", //siempre en minuscula si el nombre tiene mas de 1 palabra escribirlo asi cerroDeOro losMolles (en lugar de espacios.. pones en mayuscula la primera letra de la nueva palabra)
tipoDePropiedad: "casa", //siempre en minuscula
tipoDeOperacion: "venta", //siempre en minuscula
alquilerTuristico: false, //true o false
moneda: "dolares", dolares o pesos siempre en minuscula
metros: 3000, //Numero sin comas ni puntos ni comillas
esDestacada: true, //true o false
metrosCubiertos: 200, //Numero sin comas ni puntos ni comillas
publicadoEn: "2021/03/21", //la fecha siempre asi Primero el anio/mes/dia
posicion: [-32.379912, -65.023364], // tocar un punto en google maps y ahi te da la localizacion poner esa localizacion entre corchetes ej [-35.65465, 65.58744]
servicios: ["Luz", "Agua", "Wifi", "ABL"], //Palabras entre comillas separadas por comas y entre corchetes
requisitos: ["1 Mes de deposito", "Garante", "Comision inmobiliaria"], //Palabras entre comillas separadas por comas y entre corchetes
ambientes: 2, //Numero sin comas ni puntos ni comillas
sanitarios: 1, //Numero sin comas ni puntos ni comillas
cliente: "carlos avero",
telefono: 11625468,
email: "carlos@gmail.com",
descripcion:
"Oportunidad de inversion, Espaciosa casa en cerro de oro , zona centrica, guardia , almacen y a 5 minutos de merlo. propiedad a estenar con vista a la sierra merlina, ",
direccion: "Barranca colorada ",
},
