// Dependencies
import React, { Component } from 'react';

// Assets
import './css/Round.css';

class Round extends Component{
    constructor(props){
        super(props);
        const { fetchRule } = this.props;
        fetchRule()
        const { rule } = this.props;
        console.log(rule)
        this.initialState = {
          currentRound: 1,
          currentMove: 0,
          move: '',
          winner: '',
          options: [],
          rounds: []
        };
        this.state = { ...this.initialState };
        this.rules = {
          paper: 'rock',
          rock: 'scissors',
          scissors: 'paper'
        };
    }

    componentWillMount() {
    
    }

    handleMove(event) {
        
    }

    render(){
        const { createGameStatus, game, clearState } = this.props;
        const { currentRound, options, currentMove, rounds, winner } = this.state;
        return (
        <div className="Round">
            <h1>Round { 1 }</h1>
            <h2 id="actualPlayer"></h2>
            {options.map((option, index) => (
                <button className="buttonRule" key={index} value={option.move} onClick={() => this.handleMove(option)} >
                    {option}
                </button>
            ))}
        </div>
        );
    };
}

export default Round;