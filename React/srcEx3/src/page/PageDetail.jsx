import React, {Component, Fragment} from 'react';
import PokemonDetail from '../Components/Detail';
import { connect } from "react-redux";
import { getPokemonDetailStarted } from "../../actions";
import {Link} from "react-router-dom";

class PageDetail extends Component {
  state = {
    animation: 'grow',
  };

  componentDidMount() {
    const { match: { params: { id } = {} } = {} } = this.props;
    this.props.getPokemonDetail(id)
  }

  render() {
    const { loading, detail } = this.props;
    const { animation } = this.state;
    // TODO definisci il prodiver del context e aggiungi un button per cambiare la classe
    return (
      <div className="page">
        {
          loading ?
            <p>Loading...</p>
            :
            <Fragment>
              <Link to={`/`}>
                <button>back to list</button>
              </Link>
              <PokemonDetail pokemon={detail} />
            </Fragment>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.pokemonDetail,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPokemonDetail: (id) => dispatch(getPokemonDetailStarted(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageDetail)
