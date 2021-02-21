import React, { useState, useContext, useRef } from 'react';
import navLinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [submenuContent, setSubmenuContent] = useState({
    name: '',
    countries: [],
  });
  const [links, setLinks] = useState(navLinks);

  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };
  const openSubmenu = (text, coordinates) => {
    const content = links.find((link) => link.name === text);
    setSubmenuContent(content);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = (e) => {
    if (!e.target.classList.contains('sub')) {
      setIsSubmenuOpen(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isSubmenuOpen,
        openSubmenu,
        location,
        submenuContent,
        closeSubmenu,
        setIsSubmenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
