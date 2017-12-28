//Dependencies
import React, { Component } from 'react';

// Assets
import './css/Winner.css';

class Winner extends Component{
    handlePlayAgain(event) {
        this.props.history.push({
            pathname: '/players',
            state: { game: {} }
        });
    }

    render(){
        const { game } = this.props;
        console.log(game)
        return (
        <div className="Winner"> 
            <h1>We have a WINNER!!</h1>
            <label id="actualPlayer">{ game.winner } is the new EMPEROR!</label>
            <button className="button" type="play" onClick={this.handlePlayAgain}>Play Again</button>
        </div>
        )
    };
}

export default Winner;