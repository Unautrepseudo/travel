import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import { Link, useParams } from 'react-router-dom';
import Error from './Error';
import navLinks from './data';

const Continent = () => {
  const [links] = useState(navLinks);
  const [fetchContinent, setFetchContinent] = useState({
    name: null,
    svgContinentt: null,
    countries: [],
  });
  const { continent } = useParams();

  useEffect(() => {
    const newContinent = links.find((item) => item.name === continent);

    setFetchContinent({
      name: newContinent.name,
      svgContinent: newContinent.svgContinent,
      countries: newContinent.countries,
    });
  }, [continent]);

  return (
    <section className="continent">
      <div className="cont-menu">
        <div className="cont-left">
          <img src={`${fetchContinent.svgContinent}`} className="svg" alt="" />
        </div>
        <div className="cont-right">
          {fetchContinent.countries.map(({ title, bcgImg }) => {
            return (
              <Link
                to={`${continent}/${title}`}
                key={title}
                className="cont-card-container toto"
                style={{
                  backgroundImage: `url(${bcgImg})`,
                }}
              >
                <div className="cont-card-name">{title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Continent;
