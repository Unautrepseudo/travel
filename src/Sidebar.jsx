import React, { useState } from 'react';
import { useGlobalContext } from './context';
import navLinks from './NavLinks';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  const [links, setLinks] = useState(navLinks);

  return (
    <aside>
      <div className={`${isSidebarOpen ? 'sidebar' : 'show-sidebar '}`}>
        {links.map(({ name, countries }, i) => {
          return (
            <div key={i} style={{ color: 'black' }}>
              <h2 className="side-name">{name}</h2>
              {countries.map(({ thumb, title }, index) => {
                return (
                  <Link
                    to={`/${title}`}
                    key={index}
                    className="thumb-container"
                    onClick={toggleSidebar}
                  >
                    <span className="subthumb-cont">
                      <img className="side-thumb" src={thumb} alt={title} />
                    </span>
                    <p>{title}</p>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
