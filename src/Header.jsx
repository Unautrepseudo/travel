import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import navLinks from './data';
import Submenu from './Submenu';
import { Link, useRouteMatch } from 'react-router-dom';

const Header = () => {
  const {
    isSidebarOpen,
    toggleSidebar,
    isSubmenuOpen,
    openSubmenu,
    setIsSubmenuOpen,
  } = useGlobalContext();
  const [links, setLinks] = useState(navLinks);
  const { closeSubmenu } = useGlobalContext();
  const subLinks = useRef(null);
  const [value, setValue] = useState(null);

  const displaySubmenu = (e) => {
    const linkText = e.target.textContent;
    const coord = e.target.getBoundingClientRect();
    const left = coord.left;
    const bottom = coord.bottom - 3;
    openSubmenu(linkText, { left, bottom });
  };

  return (
    <>
      <div className="head" onMouseOver={closeSubmenu}>
        <Link
          to="/"
          style={{ color: 'black' }}
          className="title"
          onClick={() => setValue(null)}
        >
          Carnet de voyage
        </Link>

        <nav className="nav">
          <ul className="sub">
            {links.map(({ name, id }, i) => {
              return (
                <Link to={`/${name}`}>
                  <span
                    className={`sub ${i === value && 'is-active'}`}
                    key={id}
                    onMouseOver={displaySubmenu}
                    onClick={() => setValue(i)}
                    useRef={subLinks}
                  >
                    {name}
                  </span>
                </Link>
              );
            })}
          </ul>
        </nav>
        <button className="toggle-menu" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <FaTimes className="fanav" />
          ) : (
            <FaBars className="fanav" />
          )}
        </button>
      </div>
      <Submenu />
    </>
  );
};

export default Header;
