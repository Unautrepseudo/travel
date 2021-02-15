import React,{useRef,useEffect} from 'react';
import {useGlobalContext} from './context'

const Submenu = ()=>{
    const{isSubmenuOpen,location}=useGlobalContext()
    const submenu = useRef(null)

    useEffect(() => {
        const subCurrent = submenu.current;
        const{left,bottom} = location;
        subCurrent.style.left =`${left}px`   
    
    }, [location])

    return(
        <div className="submenu"  >
            <div className="sublinks-container" ref={submenu}>
            bonjour je suis le submenu
            </div>
        </div>
    )
}

export default Submenu