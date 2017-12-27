// Dependencies
import React, { Component } from 'react';

// Components
import Score from './../Score';

// Assets
import './css/Round.css';

class Round extends Component{
    constructor(props){
        super(props);
        this.initialState = {
          currentRound: 1,
          currentPlayer: 1,
          winner: '',
          rounds: []
        };
        this.state = { ...this.initialState };
    }

    componentDidMount() {
        const { fetchRule } = this.props;
        if (fetchRule){
            fetchRule();
        }
    }

    getRoundWinner = function(movePlayer1, movePlayer2) {
        if(movePlayer1 !== movePlayer2){
            const { rule, game } = this.props;
            let winnerRule = rule.find(r => r.move === movePlayer1);
            if(winnerRule.kills === movePlayer2) {
                return game.player1;
            }else{
                return game.player2;
            }
        }else{
            return "Tie";
        }
      };

    handleMove(event) {
        let newRound = this.state.rounds.pop();
        let selectedMove = event.move; 
        if(this.state.currentPlayer === 2){  
            let winnerRound = this.getRoundWinner(newRound.movePlayer1, selectedMove);
            newRound = { ...newRound, id: this.state.rounds.length + 1, movePlayer2: selectedMove, winner: winnerRound };
            this.state.rounds.push(newRound);
            let nextRound = { id: this.state.rounds.length + 1, winner: "..." }
            this.state.rounds.push(nextRound);
            this.setState( prevState => ({
                ...this.state,
                currentPlayer: 1,
                currentRound: this.state.rounds.length
            }));
            
        }else{
            newRound = { ...newRound, movePlayer1: selectedMove, winner: "..." };
            this.state.rounds.push(newRound);
            this.setState( prevState => ({
                ...this.state,
                currentPlayer: 2
            }));
        }
    }


    render(){
        const { rule, game } = this.props;
        const { currentRound, currentPlayer, rounds } = this.state;
        return (
        <div className="Round">
            <h1>Round { currentRound }</h1>
            <h2 id="currentPlayer">{ currentPlayer === 1 ? game.player1 : game.player2 }</h2>
            {rule.map((rule, index) => (
                <button className="buttonRule" key={index} value={rule.move} onClick={() => this.handleMove(rule)} >
                    {rule.move}
                </button>
            ))}
            <Score rounds={rounds} />
        </div>
        );
    };
}

export default Round;