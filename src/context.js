import React, {useState, useContext} from 'react'

const AppContext = React.createContext();


export const AppProvider = ({children})=>{
    const [isSidebarOpen, setisSidebarOpen]= useState(false)
    const [isSubmenuOpen, setisSubmenuOpen]= useState(false)
    const[location,setLocation]=useState({})

    const toggleSidebar = ()=>{
        setisSidebarOpen(!isSidebarOpen)
    }
      const openSubmenu = (text,coordinates)=>{
          setLocation(coordinates)
        // setisSubmenuOpen(!isSubmenuOpen)
    }

    return(
        <AppContext.Provider value={{
            isSidebarOpen,
            toggleSidebar,
            isSubmenuOpen,
            openSubmenu,
            location
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