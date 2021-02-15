import React,{useState,useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './context'
import navLinks from './NavLinks';
import Submenu from './Submenu';

const Header = ()=>{

    const{isSidebarOpen, toggleSidebar,isSubmenuOpen,openSubmenu} = useGlobalContext()
    const [links,setLinks]= useState(navLinks)
    const[linksHover,setLinksHover]= useState(false)

    const displaySubmenu=(e:any)=>{
        const linkText= e.target.textContent;
        const coord = e.target.getBoundingClientRect();
        const left= coord.left;
        const bottom= coord.bottom -3;
        openSubmenu(linkText,{left,bottom})
    }

    

    return(
        <>
            <div className={`head`} >

                <p className="title" >Carnet de voyage</p>
                <nav className="nav"> 
                    <ul>{links.map(({name},i)=>{
                        return(
                        <span key={i} onMouseOver={displaySubmenu}>{name}</span>)
                    
                    })}
                    
                    </ul>
                </nav>
                <button className="toggle-menu" onClick={toggleSidebar}>
                {isSidebarOpen?<FaTimes className='fanav'/>:<FaBars className='fanav'/>} 
                </button>

            </div>
            <Submenu/>
        </>
    )
}

export default Header