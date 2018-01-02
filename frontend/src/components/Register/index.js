// Dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Assets
import './css/Register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = { player1: '', player2: '', error: '' };
    }

    handleStart = event => {
        event.preventDefault();
        const { player1, player2 } = this.state;
        if (player1 && player2) {
            if(player1 !== player2){
                const { createGame } = this.props;
                if (createGame) {
                    createGame({ player1: player1, player2: player2, winner: "" });
                }
            }else{
                this.setState({ error: `Player 1 and Player 2 can't be the same` });
            }
        } else {
            this.setState({ error: 'Please enter the name of each player' });
        }
    };

    render(){
        const { createGameStatus } = this.props;
        const { error } = this.state;
        const redirect =
        createGameStatus !== 'initState' ? (
            ''
        ) : (
            <Redirect to="/round" />
        );
        return (
        <div className="Register">
            {redirect}
            <h1>Enter Player's name</h1>
            <p>Player 1: <input id='Player1' type='text' name='Player1' onChange={e => this.setState({ player1: e.target.value })}/></p>
            <p>Player 2: <input id='Player2' type='text' name='Player2' onChange={e => this.setState({ player2: e.target.value })}/></p>
            <h5>{error}</h5>
            <button className="buttonRegister" type="start" onClick={this.handleStart}>Start</button>
        </div>
        )};
}

export default Register;
