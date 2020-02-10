import React, {Component, Fragment} from 'react';
import PokemonDetail from '../Components/Detail';
import { ImgContext } from '../Components/shared/ImgContext';
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

  toggleAnimation = (animation) => {
    this.setState({ animation })
  };

  render() {
    const { loading, detail } = this.props;
    const { animation } = this.state;
    return (
      <div className="page">
        {
          loading ?
            <p>Loading...</p>
            :
            <Fragment>
              <button onClick={() => this.toggleAnimation(animation === 'grow' ? 'shrink' : 'grow')}>
                Toggle Img Animation (now {animation})
              </button>
              <Link to={`/`}>
                <button>back to list</button>
              </Link>
              <ImgContext.Provider value={{ animation }} >
                <PokemonDetail pokemon={detail} />
              </ImgContext.Provider>
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
