import React from 'react';
import { useGlobalContext } from './context';

const Continent = () => {
  return (
    <section className="continent">
      <div className="cont-menu">
        <div className="cont-left">
          <img src="./Assets/SVG/america.svg" className="svg" alt="" />
        </div>
        <div className="cont-right">
          <article
            className="cont-card-container toto"
            style={{
              backgroundImage: "url('./Assets/IMG/canada/can01-mid.jpg')",
            }}
          >
            <div className="cont-card-name">Monte-negro</div>
          </article>
          {/* <article
            className="cont-card-container toto"
            style={{
              backgroundImage: "url('./Assets/IMG/canada/can02-mid.jpg')",
            }}
          >
            <div className="cont-card-name">République tchèque</div>
          </article>
          <article
            className="cont-card-container toto"
            style={{
              backgroundImage: "url('./Assets/IMG/canada/can03-mid.jpg')",
            }}
          >
            <div className="cont-card-name">Pays</div>
          </article>
          <article
            className="cont-card-container"
            style={{
              backgroundImage: "url('./Assets/IMG/canada/can04-mid.jpg')",
            }}
          >
            <div className="cont-card-name">Pays</div>
          </article>
          <article
            className="cont-card-container"
            style={{
              backgroundImage: "url('./Assets/IMG/canada/can01-mid.jpg')",
            }}
          >
            <div className="cont-card-name">Pays</div>
          </article>
          <article
            className="cont-card-container"
            style={{
              backgroundImage: "url('./Assets/IMG/canada/can01-mid.jpg')",
            }}
          >
            <div className="cont-card-name">Pays</div>
          </article>
          <article
            className="cont-card-container"
            style={{
              backgroundImage: "url('./Assets/IMG/canada/can01-mid.jpg')",
            }}
          >
            <div className="cont-card-name">Pays</div>
          </article>
          <article
            className="cont-card-container"
            style={{
              backgroundImage: "url('./Assets/IMG/canada/can01-mid.jpg')",
            }}
          >
            <div className="cont-card-name">Pays</div>
          </article> */}
        </div>
      </div>
    </section>
  );
};

export default Continent;
