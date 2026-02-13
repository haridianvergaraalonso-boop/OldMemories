import "./Home.css"
import Header from "../../components/header/Header"

function Home() {
    return (
        <>
            <Header />
            <div className="Home-title">
                <h1>Bienvenido al futuro que nos prometieron</h1>
            </div>

            <div className="Home-subtitle">
                <l1>Prepárate para una experiencia inmersiva para aprender mas de lo que fue el "Frutiger Aero"</l1>
            </div>

            <div className="Home-info-title">
                <h2>¿Qué es lo que conocemos como el Frutiger aero Aesthetic?</h2>
            </div>

            <div className="Home-info1">
                <l1>Frutiger aero es una estetica que cobró fuerza entorno a los años 2019/2020, basado en lo que fue el internet de los años 1990 y los 2000, romantizando lo que fue la idea de un futuro ideal que se pensaba que podría ser en esa época</l1>
            </div>

            <div className="Home-info2">
                <l1>Si quieres seguir aprendiendo sobre este nostalgico estilo, sigue explorando esta página</l1>
            </div>

        </>

    )
}

export default Home