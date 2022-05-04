import * as actionType from "./actionType";
import axios from "axios";
export function getCountriesSuccess(countries) {
  return { type: actionType.GET_COUNTRIES_SUCCESS, payload: countries };
}

export function getCountries() {
  return function (dispatch) {
    let url = "https://restcountries.com/v2/all";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCountriesSuccess(result)));
  };
}
