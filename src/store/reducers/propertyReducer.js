import * as actionTypes from "../types/propertyTypes";

/* 
COMO INGRESAR LOS TIPOS DE DATOS

id: Numero de casa de la pagina entre comillas = EJEMPLO  "68",

precio: Numero sin comillas y sin puntos o comas = EJEMPLO 70000

archivos: [],

fotoPrincipal: Link de la foto entre comillas = EJEMPLO "https://i.ibb.co/f9fJV75/casa1.jpg",

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

servicios: List de Palabras en minusculas enre comillas adentro de [] EJEMPLO = ["luz", "agua", "wifi"],

ambientes: Numero sin comillas y sin puntos o comas = EJEMPLO 4,

sanitarios: Numero sin comillas y sin puntos o comas = EJEMPLO 2,

cliente: Este puede ir con espacios mayusculas y todo , solo importa que este entre comillas = EJEMPLO "carlos avero",

estado: unicos valores posibles son  "disponible" o "alquilada",

telefono: Numero sin comillas y sin puntos o comas = 11625468,

email: el mail entre comillas "carlos@gmail.com",

descripcion: Solo importa que este todo entre comillas = EJMPLO  "Nueva esta flama papa aprovechala",

direccion: Solo importa que este todo entre comillas = EJMPLO "segui 212",
 */

const initialState = {
  properties: [
    {
      id: "1",
      precio: 7000,
      archivos: [],
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 1000,
      esDestacada: true,
      fotoPrincipal:
        "data:image/jpeg;base64,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",
      metrosCubiertos: 200,
      aEstrenar: false,
      latitud: 342,
      longitud: 342,
      servicios: ["luz", "agua", "wifi", "ABL"],
      ambientes: 3,
      sanitarios: 1,
      cliente: "carlos avero",
      estado: "disponible",
      telefono: 11625468,
      email: "carlos@gmail.com",
      descripcion: "casa en loteo nuevo, sin gas todo electrico",
      direccion: "jose brochero 212",
    },
    {
      id: "2",
      precio: 70000,
      archivos: [],
      fotoPrincipal:
        "data:image/jpeg;base64,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",
      zona: "carpinteria",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 2000,
      esDestacada: false,
      metrosCubiertos: 500,
      latitud: 342,
      longitud: 342,
      servicios: ["luz", "agua", "wifi", "ABL"],
      ambientes: 4,
      sanitarios: 2,
      cliente: "carlos avero",
      estado: "disponible",
      telefono: 11625468,
      email: "carlos@gmail.com",
      descripcion: "Nueva esta flama papa aprovechala",
      direccion: "segui 212",
    },
    {
      id: "3",
      precio: 40000,
      archivos: [],
      fotoPrincipal: "https://i.ibb.co/f9fJV75/casa1.jpg",
      zona: "carpinteria",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "alquiler",
      alquilerTuristico: true,
      moneda: "pesos",
      metros: 2000,
      esDestacada: true,
      metrosCubiertos: 1000,
      latitud: 342,
      longitud: 342,
      servicios: ["luz", "agua", "wifi", "ABL"],
      ambientes: 4,
      sanitarios: 2,
      cliente: "carlos avero",
      estado: "disponible",
      telefono: 11625468,
      email: "carlos@gmail.com",
      descripcion: "Nueva esta flama papa aprovechala",
      direccion: "segui 212",
    },
    {
      id: "4",
      precio: 500,
      archivos: [],
      fotoPrincipal: "https://i.ibb.co/D4hKNRL/casa-2.jpg",
      zona: "merlo",
      tipoDePropiedad: "cabaña",
      tipoDeOperacion: "alquiler",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 500,
      esDestacada: true,
      metrosCubiertos: 200,
      latitud: 342,
      longitud: 342,
      servicios: ["luz", "agua", "wifi", "ABL"],
      ambientes: 4,
      sanitarios: 2,
      cliente: "carlos avero",
      estado: "disponible",
      telefono: 11625468,
      email: "carlos@gmail.com",
      descripcion: "Nueva esta flama papa aprovechala",
      direccion: "segui 212",
    },
    {
      id: "5",
      precio: 100000000,
      archivos: [],
      fotoPrincipal: "https://i.ibb.co/d4PLzt0/casa-3.jpg",
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "pesos",
      metros: 2000,
      esDestacada: true,
      metrosCubiertos: 200,
      latitud: 342,
      longitud: 342,
      servicios: ["luz", "agua", "wifi", "ABL"],
      ambientes: 4,
      sanitarios: 2,
      cliente: "carlos avero",
      estado: "disponible",
      telefono: 11625468,
      email: "carlos@gmail.com",
      descripcion: "Nueva esta flama papa aprovechala",
      direccion: "segui 212",
    },
    {
      id: "6",
      precio: 90000,
      archivos: [],
      fotoPrincipal: "https://i.ibb.co/59Dc54N/casa-4.jpg",
      zona: "merlo",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 10000,
      esDestacada: true,
      metrosCubiertos: 200,
      latitud: 342,
      longitud: 342,
      servicios: ["luz", "agua", "wifi", "ABL"],
      ambientes: 4,
      sanitarios: 2,
      cliente: "carlos avero",
      estado: "disponible",
      telefono: 11625468,
      email: "carlos@gmail.com",
      descripcion: "Nueva esta flama papa aprovechala",
      direccion: "segui 212",
    },
    {
      id: "7",
      precio: 40000,
      archivos: [],
      fotoPrincipal: "https://i.ibb.co/59Dc54N/casa-4.jpg",
      zona: "cerroDeOro",
      tipoDePropiedad: "casa",
      tipoDeOperacion: "venta",
      alquilerTuristico: false,
      moneda: "dolares",
      metros: 3000,
      esDestacada: true,
      metrosCubiertos: 200,
      latitud: 342,
      longitud: 342,
      servicios: ["luz", "agua", "wifi", "ABL"],
      ambientes: 2,
      sanitarios: 1,
      cliente: "carlos avero",
      estado: "disponible",
      telefono: 11625468,
      email: "carlos@gmail.com",
      descripcion: "Nueva esta flama papa aprovechala",
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
