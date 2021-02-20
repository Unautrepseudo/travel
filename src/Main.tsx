import Sidebar from './Sidebar'
import { useGlobalContext } from './context'

const Main = () => {

    const { closeSubmenu } = useGlobalContext()

    return (
        <div className='main' onMouseOver={closeSubmenu}>
            <Sidebar />
        </div>
    )
}

export default Main