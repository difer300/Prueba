//Dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Assets
import './css/Winner.css';
import winner from './images/winner.png';

class Winner extends Component{

    handlePlayAgain = event => {
        const { clearState } = this.props;
        clearState();
    }

    render(){
        const { game, createGameStatus } = this.props;
        const redirect =
        createGameStatus !== 'notLoaded' ? (
            ''
        ) : (
            <Redirect to="/" />
        );
        return (
        <div className="Winner"> 
            {redirect}
            <img src={winner} alt="winnerImage" className="winnerImage"/>
            <h1>We have a WINNER!!</h1>
            <label id="actualPlayer" className="winnerName">{ game.winner } is the new EMPEROR!</label>
            <button className="buttonWinner" type="play" onClick={this.handlePlayAgain}>Play Again</button>
        </div>
        )
    };
}

export default Winner;