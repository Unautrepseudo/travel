// import CroatiaSvg from './Assets/SVG/CroatiaSvg'
import Sidebar from './Sidebar'
import {useGlobalContext} from './context'
const Main = ()=>{
    return(
        <div className='main'>
            <Sidebar/>
            {/* <CroatiaSvg /> */}
        </div>
    )
}

export default Main