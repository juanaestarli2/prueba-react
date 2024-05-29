import './header.css';
const Header = () => {
    return (
        <header>
            <div className="header-box">
                <img src="src/assets/logoAsap.png" alt="asap logo" />
                <h1>Nosotros</h1>
                <h1>Soluciones y servicios</h1>
                <h1>Blog</h1>
                <h1>Se parte de ASAP</h1>
                <h1>Contacto</h1>

                <div className="icons">
                    <img src="src/assets/bandera_argentina.svg" alt="bandera argentina" />
                    <img src="src/assets/bandera_GB.svg" alt="bandera gb" />
                </div>
            </div>
        </header>
    )
}

export default Header