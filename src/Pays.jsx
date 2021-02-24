import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCircle, FaUndo } from 'react-icons/fa';
import navLinks from './data';

const Pays = () => {
  // const { continent, pays } = useParams();
  const [data] = useState(navLinks);
  const [value, setValue] = useState(0);
  const { countries } = data[0];

  useEffect(() => {
    let carousel = setInterval(() => {
      setValue(value + 1);
      if (value > 3) {
        setValue(0);
      }
    }, 6000);
    return () => {
      clearInterval(carousel);
    };
  }, [value]);

  return (
    <section className="pays">
      {countries.map((country) => {
        const { title, svg, flag, mid } = country;
        return (
          <div key={title}>
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
                    <img
                      key={value}
                      src={image}
                      className={` pays-img ${index === value && 'titi'}`}
                      alt=""
                    />
                    <span className="icons-container">
                      <span>
                        {mid.map((item, i) => {
                          return (
                            <FaCircle
                              key={item}
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
          </div>
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
