import React from 'react';
import { Link } from 'react-router-dom';
import logo from './404chevre.gif';

const Error = () => {
  return (
    <div className="error-page">
      <p className="error-text">
        {' '}
        Vous avez bidouillé l'url. La page recherchée n'existe pas. En guise de
        punition voici une page d'erreur bien moche.
      </p>
      <span className="chevre-container">
        <img className="chevre" src={logo} alt="" />
      </span>
      <Link to="/" className="error-btn">
        <button className="error-btn">
          Ca brule les yeux. Retour à la page d'acceuil s'il vous plait
        </button>
      </Link>
    </div>
  );
};

export default Error;
