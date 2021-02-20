import React from 'react';
import { Link, useParams } from 'react-router-dom';
import svg from './SVG/bulgarie.svg';

const Pays = () => {
  const { title } = useParams();
  return (
    <section className="pays">
      <span>{title}</span>
      <div className="pays-left">
        <img src={svg} className="svg" alt="" />
      </div>
      <div className="pays-right">
        <article className="pays-card">
          <img src="./Assets/IMG/vietnam/viet01-mid.jpg" alt="" />
        </article>
        <article className="pays-card">
          <img src="./Assets/IMG/vietnam/viet02-mid.jpg" alt="" />
        </article>
        <article className="pays-card">
          <img src="./Assets/IMG/vietnam/viet03-mid.jpg" alt="" />
        </article>
        <article className="pays-card">
          <img src="./Assets/IMG/vietnam/viet04-mid.jpg" alt="" />
        </article>
        <article className="pays-card">
          <img src="./Assets/IMG/vietnam/viet05-mid.jpg" alt="" />
        </article>
      </div>

      <Link to="/continent">
        <button>Retour</button>
      </Link>
    </section>
  );
};

export default Pays;
