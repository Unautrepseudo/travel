import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    submenuContent: { countries },
    setIsSubmenuOpen,
  } = useGlobalContext();

  const submenu = useRef(null);

  const toggleMenu = () => {
    setIsSubmenuOpen(false);
  };

  useEffect(() => {
    const subCurrent = submenu.current;
    const { left } = location;
    subCurrent.style.left = `${left}px`;
  }, [location]);

  return (
    <div
      className={`${!isSubmenuOpen ? 'submenu show-submenu' : 'hide'} sub  `}
    >
      <div className="sublinks-container sub" ref={submenu}>
        {countries.map(({ thumb, title }) => {
          return (
            <Link
              to={`/${title}`}
              style={{ color: 'black' }}
              key={title}
              className="sub-cont sub"
              onClick={toggleMenu}
            >
              <p className="sub-title">{title}</p>
              <span className="subthumb-cont">
                <img className="sub-thumb" src={thumb} alt={title} />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
