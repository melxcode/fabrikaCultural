import * as actionTypes from "../types/propertyTypes";

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