import React, {Component, Fragment} from 'react';
import PokemonDetail from '../Components/Detail';
import {Link} from "react-router-dom";

class PageDetail extends Component {

  // TODO "connettere" il componente allo store

  componentDidMount() {
   // TODO prendere l'id dalla route per recuperare il dettaglio del pokemon
  }

  render() {
    const { loading, detail } = this.props;
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
              {/*TODO passare al componente alla props pokemon la risposta ricevuta*/}
              <PokemonDetail pokemon={} />
            </Fragment>
        }
      </div>
    )
  }
}

export default PageDetail
