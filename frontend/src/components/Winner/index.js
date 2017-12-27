//Dependencies
import React, { Component } from 'react';

// Assets
import './css/Winner.css';

class Winner extends Component{
    constructor(props){
        super(props);
        this.state = { game: { ...this.props.location.state.game }}
        
        this.handlePlayAgain = this.handlePlayAgain.bind(this);
    }

    handlePlayAgain(event) {
        this.props.history.push({
            pathname: '/players',
            state: { game: {} }
        });
    }

    render(){
        return (
        <div className="Winner"> 
            <h1>We have a WINNER!!</h1>
            <label id="actualPlayer">{ this.state.game.winner } is the new EMPEROR!</label>
            <button className="button" type="play" onClick={this.handlePlayAgain}>Play Again</button>
        </div>
        )
    };
}

export default Winner;