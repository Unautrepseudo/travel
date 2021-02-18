import React from 'react';
import { Link } from 'react-router-dom';
import logo from './404chevre.gif';

const Error = () => {
  return (
    <div className="error-page">
      <p>
        {' '}
        La page recherchée n'existe pas. En punition voici une page d'erreur
        bien moche.
      </p>
      <Link to="/continent">
        <button>
          Ca brule les yeux. Retour à la page d'acceuil s'il vous plait
        </button>
      </Link>
      <span className="chevre-container">
        <img className="chevre" src={logo} alt="" />
      </span>
    </div>
  );
};

export default Error;
