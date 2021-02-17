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
    <div className={`${!isSubmenuOpen ? 'submenu show-submenu' : 'hide'}sub  `}>
      <div className="sublinks-container sub" ref={submenu}>
        {countries.map(({ thumb, title }, index) => {
          return (
            <div key={index} className="sub-cont sub">
              <p className="sub-title">{title}</p>
              <span className="subthumb-cont">
                <img className="sub-thumb" src={thumb} alt={title} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
