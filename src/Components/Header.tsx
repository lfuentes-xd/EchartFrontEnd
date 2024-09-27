import "../Config/Styles/HeaderStyles.css"

export const Header = () => {
  return (
    <>
        <header className="header">
            <div className="containerPadre">
                <div className="container">
                    <nav>
                        <a href="/" className="text">Pesos de calor</a>
                        <a href="/Graph" className="text"> Pesos normales </a>
                        <a href="/Apartments" className="text"> Apartamentos </a>
                    </nav>
                </div>
            </div>
        </header>
    </>
  )
}
