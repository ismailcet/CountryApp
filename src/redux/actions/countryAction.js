import * as actionType from "./actionType";
import axios from "axios";
export function getCountriesSuccess(countries) {
  return { type: actionType.GET_COUNTRIES_SUCCESS, payload: countries };
}

export function getCountries() {
  return function (dispatch) {
    let url = "https://restcountries.com/v2/all";
    return axios
      .get(url)
      .then((result) => dispatch(getCountriesSuccess(result)));
  };
}
