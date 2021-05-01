import * as actionTypes from "../types/propertyTypes";

/* 
COMO INGRESAR LOS TIPOS DE DATOS

id: Numero de casa de la pagina entre comillas = EJEMPLO  "68",

nombre: una oracion descriptiva = EJEMPLO  "Oportunidad Espaciosa Casa de categoria "

precio: Numero sin comillas y sin puntos o comas = EJEMPLO 70000

archivos: [],

fotoPrincipal: Link de la foto entre comillas = EJEMPLO "https://i.ibb.co/f9fJV75/casa1.jpg",

archivos : una lista de links de las fotos SOLO DE FOTOS : EJEMPLO = 
                    [
                  "https://i.ibb.co/f9fJV75/casa1.jpg",
                  "https://i.ibb.co/f9fJV75/casa2.jpg",
                  "https://i.ibb.co/f9fJV75/casa3.jpg"
                    ]

zona: Palabras en minusculas y sin espacio = EJEMPLO "carpinteria" o sino "cerroDeOro",

tipoDePropiedad: Palabra en minusculas enre comillas = EJEMPLO "casa"

tipoDeOperacion: Palabra en minusculas enre comillas = EJEMPLO "alquiler",

alquilerTuristico: Esto es verdadero o falso en ingles sin comillas EJEMPLO = true o false

moneda: Palabra en minusculas enre comillas = EJEMPLO "pesos",

metros: Numero sin comillas y sin puntos o comas = EJEMPLO 2000,

esDestacada: Esto es verdadero o falso en ingles sin comillas EJEMPLO = true o false,

metrosCubiertos:  Numero sin comillas y sin puntos o comas = EJEMPLO  200,

latitud: 342,

longitud: 342,

servicios: List de Palabras  enre comillas adentro de [] EJEMPLO = ["luz", "agua", "wifi"],

ambientes: Numero sin comillas y sin puntos o comas = EJEMPLO 4,

sanitarios: Numero sin comillas y sin puntos o comas = EJEMPLO 2,

cliente: Este puede ir con espacios mayusculas y todo , solo importa que este entre comillas = EJEMPLO "carlos avero",

estado: unicos valores posibles son  "disponible" o "alquilada",

telefono: Numero sin comillas y sin puntos o comas = 11625468,

email: el mail entre comillas "carlos@gmail.com",

descripcion: Solo importa que este todo entre comillas = EJMPLO  "Nueva esta flama papa aprovechala",

direccion: Solo importa que este todo entre comillas = EJMPLO "segui 212",

 publicadoEn: Ente comillas "YYYY/MM/DD" es decir "anio/mes/dia" = EJEMPLO "2021/05/15",

 */

const initialState = {
  properties: [
    {
      id: "1",
      nombre: "MERLO, SAN LUIS, PIEDRA BLANCA, 3 CASAS EN VENTA",
      precio: 150000,
      archivos: [
        "https://i.ibb.co/gd759Hm/1-1.jpg",
        "https://i.ibb.co/DGRZW42/1-2.jpg",
        "https://i.ibb.co/mzQPQj2/1-3.jpg",
        "https://i.ibb.co/37FFsx4/1-5.jpg",
        "https://i.ibb.co/LzzbmM6/1-6.jpg",
      ],
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 75,
      esDestacada: true,
      fotoPrincipal: "https://i.ibb.co/DGRZW42/1-2.jpg",
      metrosCubiertos: 75,
      aEstrenar: false,
      posicion: [-32.318935, -65.01255],
      servicios: ["Luz", "Agua", "Wifi"],
      requisitos: ["Solo Dolares"],
      ambientes: 5,
      sanitarios: 1,
      cliente: "",
      estado: "disponible",
      telefono: 2,
      email: "",
      descripcion:
        "PROPIEDAD CONSISTENTE EN TRES CHALETS DE 75 M2 C/U DE DOS DORMITORIOS, LIVING COMEDOR, COCINA COMEDOR, BAÑO, PEQUEÑO PATIO, UBICADOS EN LA RESERVA DE PIEDRA BLANCA, CUENTA CON TODOS LOS SERVICIOS, OPORTUNIDAD, LAS TRES UNIDADES CONSTRUIDAS CON EXCELENTES MATERIALES A SOLO DOLARES 150.000",
      direccion: "Piedra blanca",
      publicadoEn: "2020/07/15",
    },
    {
      id: "2",
      nombre: "LOTE DE 1500 METROS EN CERRO DE ORO EN MERLO, SAN LUIS",
      precio: 20000,
      archivos: [
        "https://i.ibb.co/8bCDP82/LOTE-2.jpg",
        "https://i.ibb.co/XSDxTDt/LOTE.jpg",
      ],
      fotoPrincipal: "https://i.ibb.co/8bCDP82/LOTE-2.jpg",
      zona: "cerroDeOro",
      tipoDePropiedad: "lote",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 1500,
      esDestacada: false,
      metrosCubiertos: 0,
      publicadoEn: "2021/04/26",
      posicion: [-32.377013, -64.987944],
      servicios: ["Luz", "Agua"],
      requisitos: ["Escritura Inmediata"],
      ambientes: 0,
      sanitarios: 0,
      cliente: "",
      estado: "disponible",
      telefono: 5,
      email: "",
      descripcion:
        "Increíble oportunidad de inversión en cerro de oro Merlo San Luis lote de 1500 M2 ? servicios de luz y agua escritura inmediata? 2664035075 ? a minutos del centro de Merlo San Luis, ubicado desde Ruta 1 hacia las sierras, excelente vistas y ubicaciòn",
      direccion: "Cerro de Oro",
    },
    {
      id: "3",
      nombre: "CHALET EN VENTA EN EL CENTRO DE MERLO",
      precio: 110000,
      archivos: [
        "https://i.ibb.co/N9NVcM3/CASA-5.jpg",
        "https://i.ibb.co/W0CGFFV/CASA-4.jpg",
        "https://i.ibb.co/YRC7JRJ/CASA-3.jpg",
        "https://i.ibb.co/5k6J9V1/CASA-2.jpg",
        "https://i.ibb.co/6t2Vfpd/CASA-1.jpg",
      ],
      fotoPrincipal: "https://i.ibb.co/YRC7JRJ/CASA-3.jpg",
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      publicadoEn: "2021/04/26",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 1050,
      esDestacada: true,
      metrosCubiertos: 200,
      posicion: [-32.346763, -65.014698],
      servicios: ["Luz", "Agua", "Wifi", "ABL"],
      requisitos: ["Garage", "Parrilla", "Baulera"],
      ambientes: 7,
      sanitarios: 2,
      cliente: "",
      estado: "disponible",
      telefono: 5,
      email: "",
      descripcion:
        "CASA EN VENTA MERLO, SAN LUIS Ubicada en el centro de Merlo. 4 ambientes Sobre lote de 1050m2 Garage, parrilla y lavadero Living comedor en L con hogar ., baño principal ,dos dormitorios con placard. Cocina separada ,toilette, pequeño lavadero. Salida a gran patio empedrado donde se observa el garaje del mismo estilo de construcción. Contiene un baño y un placard. En la misma estructura del garaje se encuentran la parrilla y una baulera.",
      direccion: "Merlo",
    },
    {
      id: "4",
      nombre: "LOTE EN VENTA EN MERLO MUY CERCA DEL CASCO HISTORICO",
      precio: 17000,
      archivos: [
        " https://i.ibb.co/P9pHK16/lote-3.jpg",
        "https://i.ibb.co/wLLDHVR/lote-2.jpg",
        "https://i.ibb.co/qMP53q3/lote-1.jpg",
      ],
      fotoPrincipal: "https://i.ibb.co/wLLDHVR/lote-2.jpg",
      zona: "merlo",
      tipoDePropiedad: "lote",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 800,
      esDestacada: true,
      metrosCubiertos: 0,
      publicadoEn: "2021/04/26",
      posicion: [-32.346763, -65.014698],
      servicios: ["Luz", "Agua", "Gas "],
      requisitos: ["A 200 MTS de Av. del Sol"],
      ambientes: 0,
      sanitarios: 0,
      cliente: "",
      estado: "disponible",
      telefono: 5,
      email: "",
      descripcion:
        "LOTES EN VENTA MERLO, SAN LUIS. 800 m2 A 200 m. de Av del Sol Excelente ubicacion Servicios de luz, agua y gas natural",
      direccion: "Merlo",
    },
    {
      id: "5",
      nombre: "CASA CON LOCAL EN MERLO SAN LUIS ",
      precio: 140000,
      archivos: [
        "https://i.ibb.co/98SPYZp/casa-6.jpg",
        "https://i.ibb.co/wzD70sV/casa-8.jpg",
        "https://i.ibb.co/tzkkdZz/casa-9.jpg",
        "https://i.ibb.co/vhXTMBd/casa-4.jpg",
        "https://i.ibb.co/cYrRLTM/casa-5.jpg",
        "https://i.ibb.co/d7VLxKG/casa-3.jpg",
        "https://i.ibb.co/X2xcH1H/casa-2.jpg",
        "https://i.ibb.co/swmWPH5/casa-1.jpg",
      ],
      fotoPrincipal: "https://i.ibb.co/zSZ2jCZ/casa-7.jpg",
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      posicion: [-32.346763, -65.014698],
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 1000,
      esDestacada: true,
      metrosCubiertos: 100,
      publicadoEn: "2021/04/26",
      servicios: ["Luz", "Agua", "Gas"],
      requisitos: ["Incluye Local"],
      ambientes: 4,
      sanitarios: 1,
      cliente: "",
      estado: "disponible",
      telefono: 5,
      email: "",
      descripcion:
        "CASA EN VENTA MERLO, SAN LUIS. 4 ambientes Superficie cub: 100 m2 Incluye local comercial Sobre lote de 1000 m2 A 15 cuadras del centro de Merlo. Electricidad, gas natural y agua. Funcional y moderna Parquizado y con cierre perimetral. Vestidor, cochera y lavadero ",
      direccion: "Merlo",
    },
    {
      id: "6",
      nombre: "COMPLEJO DE CABAÑÁS EN RINCON DEL ESTE, MERLO",
      precio: 170000,
      archivos: [
        "https://i.ibb.co/CBmNWgG/portada-2.jpg",
        "https://i.ibb.co/7V6snLx/portada-1.jpg",
        "https://i.ibb.co/RN4sRSN/portada-9-tercera.jpg",
        " https://i.ibb.co/Rv7PXgM/portada-11.jpg",
        "https://i.ibb.co/C8sgpzj/portada-8.jpg",
        "https://i.ibb.co/ncjf6R8/portada-10.jpg",
        "https://i.ibb.co/yRg4vCV/portada-7.jpg",
        "https://i.ibb.co/9N1YvR2/portada-6.jpg",
        "https://i.ibb.co/Y3qTTdD/portada-5.jpg",
        "https://i.ibb.co/hsYB4Qt/portada-4.jpg",
        "https://i.ibb.co/bRKZJJq/portada-3.jpg",
      ],
      fotoPrincipal: "https://i.ibb.co/CBmNWgG/portada-2.jpg",
      zona: "merlo",
      tipoDePropiedad: "cabaña",
      tipoDeOperacion: "venta",
      publicadoEn: "2021/04/22",

      alquilerTuristico: true,
      moneda: "dolares",
      metros: 900,
      esDestacada: true,
      metrosCubiertos: 600,
      posicion: [-32.380023, -65.023044],
      servicios: ["Todos los servicios"],
      requisitos: ["Cochera", "Picinas"],
      ambientes: 4,
      sanitarios: 2,
      cliente: "",
      estado: "disponible",
      telefono: 5,
      email: "",
      descripcion:
        "Rincón del Este, Merlo, San Luis, Complejo de tres cabañas, dos para cuatro personas, una para dos personas, totalmente equipadas, sobre lote de 900 m2, cocheras cubiertas, piscina de 8 x 3.50 mts USD 170.00",
      direccion: "Rincon del Este",
    },
    {
      id: "7",
      nombre: "LOTE DE 1500 METROS EN CERRO DE ORO EN MERLO, SAN LUIS",
      precio: 20000,
      archivos: [],
      video: "",
      fotoPrincipal: "",
      zona: "cerroDeOro",
      tipoDePropiedad: "lote",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 1500,
      esDestacada: false,
      metrosCubiertos: 0,
      publicadoEn: "2021/04/26",
      posicion: [-32.377013, -64.987944],
      servicios: ["Luz", "Agua", "Wifi"],
      requisitos: ["Escritura inmediata"],
      ambientes: 0,
      sanitarios: 0,
      cliente: "c",
      estado: "disponible",
      telefono: 2664035075,
      email: "c",
      descripcion:
        "Increíble oportunidad de inversión en cerro de oro Merlo San Luis lote de 1500 M2  servicios de luz y agua escritura inmediata , a minutos del centro de Merlo San Luis, ubicado desde Ruta 1 hacia las sierras, excelente vistas y ubicaciòn",
      direccion: "Cerro de Oro",
    },

    {
      id: "8",
      nombre: "CAMPO EN CONCARAN",
      precio: 130000,
      archivos: [
        "https://i.ibb.co/G9xbTvx/campo-principal.jpg",
        "https://i.ibb.co/z8qNgRZ/campo1.jpg",
        "https://i.ibb.co/VThsnzN/campo2.jpg",
        "https://i.ibb.co/4R8rjgR/campo5.jpg",
        "https://i.ibb.co/1RSnX6X/campo4.jpg",
        "https://i.ibb.co/sJcZ0Lk/campo3.jpg",
      ],
      video: "",
      fotoPrincipal: "https://i.ibb.co/G9xbTvx/campo-principal.jpg",
      zona: "merlo",
      tipoDePropiedad: "campo",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 3180000,
      esDestacada: true,
      metrosCubiertos: 0,
      publicadoEn: "2021/04/22",
      posicion: [-32.380023, -65.023044],
      servicios: ["Luz", "Agua Con bomba"],
      requisitos: ["Casa principal", "Corrales"],
      ambientes: 0,
      sanitarios: 0,
      cliente: " ",
      estado: "disponible",
      telefono: 4,
      email: "@.com",
      descripcion:
        "CAMPO EN VENTA EN CONCARAN 318 HAS, SOBRE AUTOPISTA 55, APTO GANADERIA Y SIEMBRA, GALPONES, CORRALES, BRETE, LUZ, AGUA CON BOMBA, CASA PRINCIPAL",
      direccion: "CONCARAN",
    },
    {
      id: "9",
      nombre: "CASA EN VENTA EN MERLO, SAN LUIS, BARRIO LOS ESTRIBOS ",
      precio: 110000,
      archivos: [
        "https://i.ibb.co/KxS8TRc/casa-principal.jpg",
        "https://i.ibb.co/9gLWNMJ/casa-secundaria.jpg",
        "https://i.ibb.co/GTFS8TS/casa-terciaria.jpg",
        "https://i.ibb.co/RcHSYBm/casa-3.jpg",
        "https://i.ibb.co/Mnp9Dph/casa-2.jpg",
        "https://i.ibb.co/9tgfd29/casa-1.jpg",
      ],
      video: "",
      fotoPrincipal: "https://i.ibb.co/KxS8TRc/casa-principal.jpg",
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 500,
      esDestacada: true,
      metrosCubiertos: 200,
      publicadoEn: "2021/04/22",
      posicion: [-32.380023, -65.023044],
      servicios: ["Luz", "Agua", "Gas"],
      requisitos: ["Titulo Perfecto", "Lavadero"],
      ambientes: 3,
      sanitarios: 1,
      cliente: " ",
      estado: "disponible",
      telefono: 4,
      email: "@.com",
      descripcion:
        "CASA EN VENTA MERLO, SAN LUIS Ubicado en barrio Los Estribos, a 3 cuadras de Av. del Sol 3 ambientes Sobre lote de 500m2 Cochera y lavadero Electricidad, gas natural y agua Título perfecto",
      direccion: "Los estribos",
    },
    {
      id: "10",
      nombre: "CASA EN VENTA A 50 METROS AVENIDA DEL SOL ",
      precio: 140000,
      archivos: [
        "https://i.ibb.co/z765ZQX/casa-principal.jpg",
        "https://i.ibb.co/wLXLxSL/casa-secundaria.jpg",
        "https://i.ibb.co/tpmkkJt/casa-terciaria.jpg",
        "https://i.ibb.co/JRtVGzj/casa-4.jpg",
      ],
      video: "",
      fotoPrincipal: "https://i.ibb.co/z765ZQX/casa-principal.jpg",
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 485,
      esDestacada: true,
      metrosCubiertos: 200,
      publicadoEn: "2021/04/22",
      posicion: [-32.380023, -65.023044],
      servicios: ["Luz", "Agua", "Gas"],
      requisitos: ["Jardin parquizado", "Entrada de auto"],
      ambientes: 5,
      sanitarios: 1,
      cliente: " ",
      estado: "disponible",
      telefono: 4,
      email: "@.com",
      descripcion:
        "CASA EN VENTA MERLO, SAN LUIS Excelente ubicación, a 50 m. de Av. del Sol. 83 M2 cubiertos Sobre lote de 485 M2 5 ambientes Precio: USD 140.000Posee cocina, comedor, living, estudio, baño, lavadero, garage/ depósito. Amplio jardín parquizado, y entrada de autos",
      direccion: "Merlo centro",
    },
    {
      id: "11",
      nombre: "CASA EN VENTA EN CARPINTERIA",
      precio: 200000,
      archivos: [
        "https://i.ibb.co/1vNfXrY/cabania-esta-es-prin.jpg",
        "https://i.ibb.co/rp2TcG3/cabania-esta-es-sec.jpg",
        "https://i.ibb.co/0FpF37K/cabania-principal.jpg",
        "https://i.ibb.co/LJHXmdX/cabania-esta-es-ter.jpg",
        "https://i.ibb.co/BPcGyXh/cabania-3.jpg",
        "https://i.ibb.co/CnpMt83/cabania-sec.jpg",
      ],
      video: "",
      fotoPrincipal: "https://i.ibb.co/1vNfXrY/cabania-esta-es-prin.jpg",
      zona: "merlo",
      tipoDePropiedad: "cabaña",
      tipoDeOperacion: "venta",
      alquilerTuristico: true,
      moneda: "dolares",
      metros: 2500,
      esDestacada: true,
      metrosCubiertos: 120,
      publicadoEn: "2021/04/22",
      posicion: [-32.380023, -65.023044],
      servicios: ["Luz", "Agua", "Gas"],
      requisitos: ["Jardin parquizado", "Pileta", "Wifi", "DirecTV"],
      ambientes: 5,
      sanitarios: 1,
      cliente: " ",
      estado: "disponible",
      telefono: 4,
      email: "@.com",
      descripcion:
        "Ideal complejo de cabañas o conjunto de viviendas. Vivienda de 80 M2 + vivienda de 50 M2 + plano aprobado proyecto de dos cabañas mas. Sobre lote de 2500m2 Patio parquizado e iluminado, cocheras Pileta iluminada, Wifi, Directv Excelente vistas a las sierras A 300 m. de Ruta Nacional N1 Y a 100 metros de Av. Los Mandarinos",
      direccion: "Zona Av. Los Mandarinos",
    },
    {
      id: "12",
      nombre: "ESPECTACULAR CASA EN PARAJE SAN MIGUEL, CORTADERAS ",
      precio: 155000,
      archivos: [
        "https://i.ibb.co/VqxVfLy/casa-principal.jpg",
        "https://i.ibb.co/BTw37qJ/casa-secundaria.jpg",
        "https://i.ibb.co/6NgJ8dt/casa-terciaria.jpg",
        "https://i.ibb.co/gdpcyf2/casa-13.jpg",
        "https://i.ibb.co/C52zbLS/casa-12.jpg",
        "https://i.ibb.co/vwqcq8H/casa-11.jpg",
        "https://i.ibb.co/dGwT3GZ/casa-10.jpg",
        "https://i.ibb.co/596c655/casa-9.jpg",
        "https://i.ibb.co/kXxcffb/casa-8.jpg",
        "https://i.ibb.co/nBC5v1w/casa-7.jpg",
        "https://i.ibb.co/hc2FcJP/casa-6.jpg",
        "https://i.ibb.co/1zwxfzt/casa-5.jpg",
        "https://i.ibb.co/VjrnvVr/casa-2.jpg",
        "https://i.ibb.co/YtyBwqn/casa-4.jpg",
        "https://i.ibb.co/BLBgBh7/casa-3.jpg",
        "https://i.ibb.co/LPJh15v/casa-1.jpg",
      ],
      video: "",
      fotoPrincipal: "https://i.ibb.co/VqxVfLy/casa-principal.jpg",
      zona: "cortaderas",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 3100,
      esDestacada: true,
      metrosCubiertos: 215,
      publicadoEn: "2021/04/07",
      posicion: [-32.380023, -65.023044],
      servicios: [
        "Luz Trifasica",
        "CEQUIA DE AGUA PERMANENTE DE LOS ARROYOS",
        "Gas",
      ],
      requisitos: [
        "Jardin parquizado",
        "Lista para escriturar",
        "Wifi",
        "Bosque nativo",
      ],
      ambientes: 6,
      sanitarios: 2,
      cliente: " ",
      estado: "disponible",
      telefono: 4,
      email: "@.com",
      descripcion:
        "Casa Quinta en venta , Paraje san miguel,Cortaderas, a 20 km de Merloy a 2 min del dique Piscu yaco,Vista a las sierras, Lista para entrar a vivir, dormitorio en suite, estufa a leÑa, cochera,Pisos de porcelanato, Bosque nativom vecinos viviendo de forma permanente , ACEPTA PERMUTA ZONA CABA DESDE  NUÑEZ, BELGRANO, PALERMO, O SIMILAR ",
      direccion: "Paraje san miguel",
    },

    //falta  8081-190
    //falta  8081-189
  ],
  filteredProperties: [],
  selectedProperty: {},
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FILTERS:
      return {
        ...state,
        [action.payload.filter]: [action.payload.value],
      };

    default:
      return state;
  }
};

/* 
AGREGAR EN ZONAS "OTRAS"


GALPON
LOTE
CAMPO

es destacada


fondo negro


home foto central  */
