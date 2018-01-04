// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

// Components
import Score from './../Score';

// Assets
import './css/Round.css';

const Container = styled.div`display: flex;`;

class Round extends Component{
    constructor(props){
        super(props);
        this.initialState = {
          currentRound: 1,
          currentPlayer: 1,
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

    getGameWinner = function (player1, player2, rounds){
        let winnerPlayer1 = rounds.filter(r => r.winner === player1);
        let winnerPlayer2 = rounds.filter(r => r.winner === player2);
        if(winnerPlayer1.length > winnerPlayer2.length){
            return player1;
        }else if(winnerPlayer1.length < winnerPlayer2.length){
            return player2;
        }else{
            return "Tie";
        }
    }

    handleMove = event => {
        const { rounds, currentPlayer } = this.state;
        const { game, updateGame } = this.props;
        let newRound = rounds.pop();
        let selectedMove = event.move; 
        if(currentPlayer === 2){  
            let roundWinner = this.getRoundWinner(newRound.movePlayer1, selectedMove);
            
            newRound = { id: rounds.length + 1, winner: roundWinner, movePlayer1: newRound.movePlayer1, movePlayer2: selectedMove,  };
            rounds.push(newRound);
            let gameWinner = this.getGameWinner(game.player1, game.player2, rounds);
            if(rounds.length >= 3 && gameWinner !== "Tie"){
                this.setState( prevState => ({
                    ...this.state,
                    winner: gameWinner,
                    currentPlayer: 1,
                    currentRound: rounds.length
                }));
                updateGame({id: game._id ,player1: game.player1, player2: game.player2, winner: gameWinner, rounds: rounds });
            }else{
                let nextRound = { id: rounds.length + 1, winner: "..." }
                rounds.push(nextRound);
                this.setState( prevState => ({
                    ...this.state,
                    currentPlayer: 1,
                    currentRound: rounds.length
                }));
            }
        }else{
            newRound = { ...newRound, winner: "...", movePlayer1: selectedMove,  };
            rounds.push(newRound);
            this.setState( prevState => ({
                ...this.state,
                currentPlayer: 2
            }));
        }
    }

    render(){
        const { rule, game, updateGameStatus } = this.props;
        const { currentRound, currentPlayer, rounds } = this.state;
        const redirect =
        updateGameStatus !== 'initState' ? (
            ''
        ) : (
            <Redirect to="/winner" />
        );
        return (
        <div className="RoundContainer">
            {redirect}
            <Container>
            <div className="Round">
            <h1>Round { currentRound }</h1>
            <h2 id="currentPlayer">{ currentPlayer === 1 ? game.player1 : game.player2 }</h2>
            {rule.map((rule, index) => (
                <button className="buttonRule" key={index} value={rule.move} onClick={() => this.handleMove(rule)} >
                    {rule.move}
                </button>
            ))}
            </div>
            <Score rounds={rounds} />
            </Container>
        </div>
        );
    };
}

export default Round;