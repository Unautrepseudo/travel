import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import navLinks from './NavLinks';
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
  const [linksHover, setLinksHover] = useState(false);

  const displaySubmenu = (e) => {
    const linkText = e.target.textContent;
    const coord = e.target.getBoundingClientRect();
    const left = coord.left;
    const bottom = coord.bottom - 3;
    openSubmenu(linkText, { left, bottom });
  };
  const { closeSubmenu } = useGlobalContext();

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
                  <span className="sub" key={i} onMouseOver={displaySubmenu}>
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
