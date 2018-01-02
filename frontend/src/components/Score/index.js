// Dependencies
import React from 'react';

// Assets
import './css/Score.css';

const Score = ({ rounds }) => {
    return (
    <div className="Score">
        <h1>Score </h1>
        <table className="score-table">
        <tbody>
            <tr>
                <th>Round</th>
                <th>Winner</th> 
            </tr>
            {rounds.map((round, index) => (
                <tr key={index}>
                    <th >{ round.id }</th>
                    <th className="winner">{ round.winner }</th>
                </tr>
            ))}
            
        </tbody>
        </table>
    </div>
    );
}

export default Score;