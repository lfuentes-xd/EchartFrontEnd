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
                            <Link to="/Apartments" className="text">Apartamentos</Link>
                            <Link to="/Weights" className="text"> Analisis de Pesos</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};
