import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Pays = () => {
  const { title } = useParams();
  return (
    <section className="pays">
      <h1>page Pays</h1>
      <span>{title}</span>
      <Link to="/continent">
        <button>Retour</button>
      </Link>
    </section>
  );
};

export default Pays;
