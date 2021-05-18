import * as actionTypes from "../types/propertyTypes";

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
