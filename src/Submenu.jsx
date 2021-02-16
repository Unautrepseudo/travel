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
    <div className="submenu sub">
      <div className="sublinks-container" ref={submenu}>
        {countries.map(({ thumb, title }, index) => {
          return (
            <div key={index} className="sub-cont">
              <p className="sub-title">{title}</p>
              <img className="sub-thumb" src={thumb} alt={title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
