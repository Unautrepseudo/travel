import React from 'react';
import svg from './SVG/america.svg';

const Continent = () => {
  return (
    <section className="continent">
      <h1>page continent</h1>
      <div className="cont-menu">
        <div className="cont-left">
          <img src={svg} className="svg" alt="" />
        </div>
        <div className="cont-right"></div>
      </div>
    </section>
  );
};

export default Continent;
