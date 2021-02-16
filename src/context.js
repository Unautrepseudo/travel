import React, {useState, useContext} from 'react'
import navLinks from './NavLinks';

const AppContext = React.createContext();


export const AppProvider = ({children})=>{
    const [isSidebarOpen, setisSidebarOpen]= useState(false)
    const [isSubmenuOpen, setisSubmenuOpen]= useState(false)
    const[location,setLocation]=useState({})
    const[submenuContent, setSubmenuContent] = useState({name:'', countries:[]})
    const [links,setLinks]= useState(navLinks)

    const toggleSidebar = ()=>{
        setisSidebarOpen(!isSidebarOpen)
    }
      const openSubmenu = (text,coordinates)=>{
        const content = links.find((link)=> link.name === text)
        setSubmenuContent(content)
        setLocation(coordinates)
        setisSubmenuOpen(true)
    }

    return(
        <AppContext.Provider value={{
            isSidebarOpen,
            toggleSidebar,
            isSubmenuOpen,
            openSubmenu,
            location,
            submenuContent
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return(
        useContext(AppContext)
    )
}