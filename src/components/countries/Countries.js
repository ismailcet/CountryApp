import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as countryAction from "../../redux/actions/countryAction";
import { useEffect } from "react";
import "./Countries.css";

class Countries extends Component {
  componentDidMount() {
    this.props.actions.getCountries();
  }

  render() {
    return (
      <div className="countries">
        {this.props.countries.map((country) => (
          <div className="card" key={country.name}>
            <img src={country.flags.svg} alt={country.name} />
            <div className="info">
              <h3 className="countryName">{country.name}</h3>
              <p className="countryCapital">{country.capital}</p>
              <p className="countryPopulation">{country.population}</p>
              <p className="countryRegion">{country.region}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCountries: bindActionCreators(countryAction.getCountries, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    countries: state.countryReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
