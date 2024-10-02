import "../Config/Styles/HeaderStyles.css";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="containerPadre">
                    <div className="container">
                        <nav className="navb">
                            <Link to="/Graph" className="text">Grafica de ejemplo</Link>
                            <Link to="/" className="text">Pesos de calor</Link>
                            <Link to="/NormalWeight" className="text">Peso normal</Link>
                            <Link to="/Apartments" className="text">Apartamentos</Link>
                            <Link to="/Graphics" className="text">Graficas</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};
