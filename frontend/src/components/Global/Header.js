//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Assets
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <ul className="Menu">
            <li><Link to="/">Play</Link></li>
            <li><Link to="/ranking">Ranking</Link></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
