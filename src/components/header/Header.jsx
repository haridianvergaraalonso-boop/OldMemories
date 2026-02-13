import { useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"
function Header() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false)


    const toggleSideMenu = () => {
        setIsSideMenuVisible(prev => !prev)
        return
    }


    return (
        <>
            <div className="header-main">
                <div className="header-logo" onClick={toggleSideMenu}>
                    <img src="frutigerAero.png" alt="logo" />
                </div>
          
            </div>
            {
                isSideMenuVisible ?
                    <div className="header-side-menu">
                      <ul>
                        <li><Link to="/home">Inicio</Link></li>
                        <li><Link to="/gallery">Galería</Link></li>
                        <li><Link to="/history">Historia</Link></li>
                    </ul>
                    </div>
                    :
                    <></>
            }
        </>
    )
}


export default Header