import { SET_FILTERS, SET_PROPERTIES } from "../types/propertyTypes";

export const deleteBranch = (filter, value) => (dispatch) => {
  dispatch({
    type: SET_FILTERS,
    payload: {
      filter,
      value,
    },
  });
};

export const setProperties = (propertyList) => (dispatch) => {
  dispatch({
    type: SET_PROPERTIES,
    payload: {
      propertyList,
    },
  });
};
