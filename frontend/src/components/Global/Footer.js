import React, { Component } from 'react';
import logoCompany from './images/logoCompany.jpg';
import './css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <img src={logoCompany} alt="logoCompany" />
      </div>
    );
  }
}

export default Footer;
