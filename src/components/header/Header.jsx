import { useState } from "react"
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
                            <li>Inicio</li>
                            <li>Menú</li>
                            <li>¿Cómo surgió?</li>
                            <li>Diferentes estilos</li>
                            <li>Registro</li>
                        </ul>
                    </div>
                    :
                    <></>
            }
        </>
    )
}


export default Header