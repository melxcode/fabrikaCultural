import { SET_FILTERS } from "../types/propertyTypes";

export const deleteBranch = (filter, value) => (dispatch) => {
  dispatch({
    type: SET_FILTERS,
    payload: {
      filter,
      value,
    },
  });
};
