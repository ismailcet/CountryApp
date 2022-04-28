import * as actionType from "../actions/actionType";
import initialState from "./initialState";

export default function countryReducer(state = initialState.countries, action) {
  switch (action.type) {
    case actionType.GET_COUNTRIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
