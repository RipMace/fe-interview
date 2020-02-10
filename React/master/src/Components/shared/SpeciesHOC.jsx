import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSpecies as getSpeciesAction } from "../../../actions";

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

    componentDidMount() {
      const { species, number } = this.props;
      if (species.id !== number) {
        this.props.getSpecies(this.props.number)
      }
    }

    render() {
      const { loading, species } = this.props;
      if (loading) {
        return <p>Loading...</p>
      } else {
        const desc = Object.values(species.flavor_text_entries).pop();
        return <WrappedComponent {...this.props} desc={desc.flavor_text}/>;
      }
    }
  });

  return connectedComponent;
}
