//Dependencies
import React, { Component } from 'react';

//Assets
import top from './images/top.png';
import './css/Ranking.css';

class Ranking extends Component{
    constructor(props){
        super(props);
        this.initialState = {
          games: [{
            player: "",
            wins: ""    
          }]
        };
        this.state = { ...this.initialState };
    }

    componentDidMount() {
        const { fetchGame } = this.props;
        if (fetchGame){
            fetchGame();
        }
    }

    getAllWinners(games){
        const winners = games.map((game) => (game.winner));
        const winnersFilter = winners.filter((val,id,array) => array.indexOf(val) === id && val !== "");
        return winnersFilter.map((winner, index) => ({
            id: index+1, 
            winner: winner, 
            wins: winners.filter(w => w === winner).length
        })).sort((a, b) => b.wins - a.wins);
    }

    render(){
        const { getAllGame } = this.props;
        const games = this.getAllWinners(getAllGame);
        return (
        <div className="Ranking">
            <div className="Ranking-content">
                <h1>Top Player's </h1>
                <img src={top} alt="top" />
                <table className="ranking-table">
                <tbody>
                    <tr>
                        <th>Ranking</th>
                        <th>Player</th>
                        <th>Wins</th> 
                    </tr>
                    {games.map((game, index) => (
                        <tr key={index}>
                            <th >{ index+1 }</th>
                            <th className="winner">{ game.winner }</th>
                            <th >{ game.wins }</th>
                        </tr>
                    ))}
                    
                </tbody>
                </table>
            </div>
        </div>
        )};
}

export default Ranking;