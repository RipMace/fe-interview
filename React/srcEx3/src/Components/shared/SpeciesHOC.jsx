import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSpecies as getSpeciesAction } from "../../../actions";

// TODO cos'è un HOC(Higher-Order Component)?
export default function SpeciesHOC(WrappedComponent) {
  const connectedComponent = connect(
    (state) => {
      return {
        ...state.species,
      }
    },
    (dispatch) => {
      return {
        getSpecies: (id) => dispatch(getSpeciesAction(id)),
      };
    })(class HOC extends Component {
      // TODO aggiunre le "species" (descrizione) al WrappedComponent
  });

  return connectedComponent;
}
