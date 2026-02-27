import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-logo">
                <img src="fish-project.png" alt="logo" />
            </div>

            <div className="footer-body"></div>

<div className="footer-social">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">📌</a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">▶️</a>
</div>

            <div className="footer-info">
                <h1>© 2026 OLDMEMORIES Todos los derechos reservados Política de Privacidad y Cookies.</h1>
            </div>

        </footer>
    )
}

export default Footer