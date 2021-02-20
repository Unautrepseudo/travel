import React from 'react';
import { Link, useParams } from 'react-router-dom';
import svg from './SVG/bulgarie.svg';
import flag from './SVG/bulgarie-flag.svg';
import { FaCircle, FaUndo } from 'react-icons/fa';

const Pays = () => {
  const { title } = useParams();

  const test = (e) => {
    e.target.style.fontSize = '35px';
  };

  return (
    <section className="pays">
      <div className="pays-left">
        <span className="pays-infos">
          <img
            src="./Assets/IMG/bulgarie/bulgaria-flag-medium.png"
            className="flag"
            alt={title}
          />
        </span>
        <img src={svg} className="svg" alt="" />
        <span className="pays-title"> {title} </span>
      </div>
      <div className="pays-right">
        <article className="pays-card">
          <img src="./Assets/IMG/vietnam/viet03-mid.jpg" alt="" />
          <span className="circle-container">
            <FaCircle onClick={test} /> <FaCircle /> <FaCircle /> <FaCircle />{' '}
            <FaCircle />
          </span>
        </article>
        <Link to="/continent" className="undo">
          <FaUndo />
        </Link>
        {/* <article className="pays-card">
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
        </article> */}
      </div>
    </section>
  );
};

export default Pays;
