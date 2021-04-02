import * as actionTypes from "../types/propertyTypes";

const initialState = {
  properties: [],
  loading: false,
  price: "",
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_HOUSE:
      return {
        ...state,
        properties: [],
      };

    default:
      return state;
  }
};
