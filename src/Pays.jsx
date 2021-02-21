import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import toto from './SVG/bulgarie.svg';
// import svg from './SVG/bulgarie.svg';

import { FaCircle, FaUndo } from 'react-icons/fa';
import navLinks from './data';

const Pays = () => {
  // const { title } = useParams();
  const [data, setData] = useState(navLinks);
  const [value, setValue] = useState(null);

  const { countries } = data[0];

  const test = (e) => {
    console.log(value);
    const test = countries.find(
      (item) => item.mid === './Assets/IMG/canada/can01-mid.jpg'
    );
    console.log(test);
  };
  return (
    <section className="pays">
      {countries.map((country) => {
        const { title, svg, flag, mid, img } = country;
        return (
          <>
            <div className="pays-left">
              <div className="pays-left">
                <span className="pays-infos">
                  <img src={flag} className="flag" alt="" />
                </span>
                <img src={svg} className="svg" alt="" />
                <span className="pays-title"> {title} </span>
              </div>
            </div>
            <div className="pays-right">
              {mid.map((image, index) => {
                return (
                  <article className="pays-card">
                    <img key={value} src={image} alt="" />
                    <span className="icons-container" onClick={test}>
                      <span>
                        {mid.map((item, i) => {
                          return (
                            <FaCircle
                              key={i}
                              className={` ${i === value && 'tutu'}`}
                              onClick={() => setValue(i)}
                            />
                          );
                        })}
                      </span>
                      <Link to="/continent" className="undo">
                        <FaUndo />
                      </Link>
                    </span>
                  </article>
                );
              })}
            </div>
          </>
        );
      })}
    </section>
  );

  // return (
  //   <section className="pays">
  //     <div className="pays-left">
  //       <span className="pays-infos">
  //         <img src="" className="flag" alt="" />
  //       </span>
  //       <img src="" className="svg" alt="" />
  //       <span className="pays-title"> TITRE </span>
  //     </div>
  //     <div className="pays-right">
  //       <article className="pays-card">
  //         <img src="./Assets/IMG/vietnam/viet03-mid.jpg" alt="" />
  //         <span className="circle-container" onClick={test}>
  //           <FaCircle key={'1'} /> <FaCircle /> <FaCircle /> <FaCircle />{' '}
  //           <FaCircle />
  //         </span>
  //       </article>
  //       <Link to="/continent" className="undo">
  //         <FaUndo />
  //       </Link>
  //       {/* <article className="pays-card">
  //         <img src="./Assets/IMG/vietnam/viet02-mid.jpg" alt="" />
  //       </article>
  //       <article className="pays-card">
  //         <img src="./Assets/IMG/vietnam/viet03-mid.jpg" alt="" />
  //       </article>
  //       <article className="pays-card">
  //         <img src="./Assets/IMG/vietnam/viet04-mid.jpg" alt="" />
  //       </article>
  //       <article className="pays-card">
  //         <img src="./Assets/IMG/vietnam/viet05-mid.jpg" alt="" />
  //       </article> */}
  //     </div>
  //   </section>
  // );
};

export default Pays;
