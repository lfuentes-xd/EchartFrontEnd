import "../Config/Styles/HeaderStyles.css"

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="containerPadre">
                    <div className="container">
                        <nav>
                            <a href="/Graph" className="text"> Grafica de ejemplo </a>
                            <a href="/" className="text">Pesos de calor</a>
                            <a href="/NormalWeight" className="text"> Peso normal </a>
                            <a href="/Apartments" className="text"> Apartamentos </a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
