import React,{useState} from 'react'
import {useGlobalContext} from './context'
import NavLinks from './NavLinks'

const Sidebar =()=>{
        const{isSidebarOpen}=useGlobalContext()
        const [links,setLinks] = useState(NavLinks)

    return(
        <aside>
            <div className={`${isSidebarOpen?"sidebar":"show-sidebar " }`}>
                {links.map(({name,countries},i)=>{
                    return(
                        <div key={i}>
                            <h2 className='side-name'>{name}</h2>
                            {countries.map(({thumb,title},index)=>{
                                
                                return(
                                    <div key={index} className='thumb-container'>
                                        <img className='side-thumb' src={thumb} alt={title}/>
                                        <p>{title}</p>
                                    </div>
                                    )
                            })}
                        </div>
                    )
                })}
            </div>
        </aside>
    )
}
export default Sidebar