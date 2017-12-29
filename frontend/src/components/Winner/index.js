//Dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Assets
import './css/Winner.css';

class Winner extends Component{

    handlePlayAgain = event => {
        const { clearState } = this.props;
        clearState();
    }

    render(){
        const { game, createGameStatus } = this.props;
        console.log(createGameStatus)
        const redirect =
        createGameStatus !== 'notLoaded' ? (
            ''
        ) : (
            <Redirect to="/" />
        );
        return (
        <div className="Winner"> 
            {redirect}
            <h1>We have a WINNER!!</h1>
            <label id="actualPlayer">{ game.winner } is the new EMPEROR!</label>
            <button className="button" type="play" onClick={this.handlePlayAgain}>Play Again</button>
        </div>
        )
    };
}

export default Winner;