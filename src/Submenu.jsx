import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    submenuContent: { countries },
  } = useGlobalContext();

  const submenu = useRef(null);

  useEffect(() => {
    const subCurrent = submenu.current;
    const { left, bottom } = location;
    subCurrent.style.left = `${left}px`;
  }, [location]);

  return (
    <div className="submenu">
      <div className="sublinks-container" ref={submenu}>
        {countries.map(({ thumb, title }, index) => {
          return (
            <div key={index} className="thumb-container">
              <img className="side-thumb" src={thumb} alt={title} />
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
