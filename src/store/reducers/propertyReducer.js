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
      nombre: "Oportunidad Espaciosa Casa de categoria ",
      precio: 40000,
      archivos: [
        "https://i.ibb.co/59Dc54N/casa-4.jpg",
        "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1489370321024-e0410ad08da4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://i.ibb.co/P92683j/Whats-App-Image-2021-04-11-at-15-45-21.jpg",
      ],
      video: "https://www.youtube.com/embed/H6SZuAcqeW8",
      fotoPrincipal:
        "https://i.ibb.co/P92683j/Whats-App-Image-2021-04-11-at-15-45-21.jpg",
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 3000,
      esDestacada: true,
      metrosCubiertos: 200,
      publicadoEn: "2021/03/21",
      posicion: [-32.379912, -65.023364],
      servicios: ["Luz", "Agua", "Wifi", "ABL"],
      requisitos: ["1 Mes de deposito", "Garante", "Comision inmobiliaria"],
      ambientes: 2,
      sanitarios: 1,
      cliente: "carlos avero",
      estado: "disponible",
      telefono: 11625468,
      email: "carlos@gmail.com",
      descripcion:
        "Oportunidad de inversion, Espaciosa casa en cerro de oro , zona centrica, guardia , almacen y a 5 minutos de merlo. propiedad a estenar con vista a la sierra merlina, ",
      direccion: "segui 212",
    },

    {
      id: "8",
      nombre: "Casa nueva",
      precio: 10000,
      archivos: [],
      video: "",
      fotoPrincipal: "",
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 3000,
      esDestacada: true,
      metrosCubiertos: 200,
      publicadoEn: "2021/03/21",
      posicion: [-33.608875, -66.106576],
      servicios: ["Luz", "Agua", "Wifi", "ABL"],
      requisitos: ["1 Mes de deposito", "Garante", "Comision inmobiliaria"],
      ambientes: 2,
      sanitarios: 1,
      cliente: "carlos avero",
      estado: "disponible",
      telefono: 11625468,
      email: "carlos@gmail.com",
      descripcion:
        "Oportunidad de inversion, Espaciosa casa en cerro de oro , zona centrica, guardia , almacen y a 5 minutos de merlo. propiedad a estenar con vista a la sierra merlina, ",
      direccion: "segui 212",
    },
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
