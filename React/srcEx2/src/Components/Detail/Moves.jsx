import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMoves as getMovesAction } from "../../../actions";
import Modal from '../shared/Modal';

class Moves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  modalTrigger = () =>  this.setState({ showModal: !this.state.showModal });

  render() {
    const { getMoves, movesToGet, loading, moves } = this.props;

    return (
      <div>
        <button onClick={this.modalTrigger}>Show Moves</button>
        {
          this.state.showModal ?
            <Modal onDidMount={() => getMoves(movesToGet)}>
              <div className="modal">
                <div className="movesTitle">
                  <h2>
                    All Moves
                  </h2>
                  <button onClick={this.modalTrigger}>close</button>
                </div>
                 {
                   loading ?
                     <p>Loading...</p>
                     :
                     <div className="moves">
                       <div className="move">
                         <h3>Name</h3>
                         <h3>Accuracy</h3>
                         <h3>Power</h3>
                       </div>
                       {
                         moves.map((move, index) => (
                           <div className="move" key={index}>
                             <h5>{move.name}</h5>
                             <div>{move.accuracy}</div>
                             <div>{move.power}</div>
                           </div>
                         ))
                       }
                     </div>
                 }
              </div>
            </Modal>
            :
            null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.moves,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMoves: (moves) => dispatch(getMovesAction(moves)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moves)
