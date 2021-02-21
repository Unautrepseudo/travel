import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import navLinks from './data';
import Submenu from './Submenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const {
    isSidebarOpen,
    toggleSidebar,
    isSubmenuOpen,
    openSubmenu,
    setIsSubmenuOpen,
  } = useGlobalContext();
  const [links, setLinks] = useState(navLinks);
  const [isActive, setIsActive] = useState(false);
  const { closeSubmenu } = useGlobalContext();
  const subLinks = useRef(null);

  const displaySubmenu = (e) => {
    const linkText = e.target.textContent;
    const coord = e.target.getBoundingClientRect();
    const left = coord.left;
    const bottom = coord.bottom - 3;
    openSubmenu(linkText, { left, bottom });
  };
  const handleChange = (e) => {
    setIsActive(!isActive);
    isActive
      ? (e.target.style.color = 'white') &&
        (e.target.style.textShadow = '1px 1px 12px rgba(255, 252, 252, 0.924)')
      : (e.target.style.color = 'black') && (e.target.style.textShadow = null);
    setIsSubmenuOpen(false);
  };

  return (
    <>
      <div className="head" onMouseOver={closeSubmenu}>
        <Link to="/" style={{ color: 'black' }} className="title">
          Carnet de voyage
        </Link>

        <nav className="nav">
          <ul className="sub">
            {links.map(({ name }, i) => {
              return (
                <Link to="/continent">
                  <span
                    className="sub"
                    key={i}
                    onMouseOver={displaySubmenu}
                    onClick={handleChange}
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
