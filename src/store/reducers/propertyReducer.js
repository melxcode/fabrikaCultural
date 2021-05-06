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
  properties: [],
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
    case actionTypes.SET_PROPERTIES:
      return {
        ...state,
        properties: action.payload.propertyList,
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
