import CartWidget from "./CartWidget"
import "./navbar.css"
import logoTrvial from "../../assets/logoTrvial.png"

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container navbar-container">
        <div className="brand">
          <img src={logoTrvial} width={75} alt="" />
        </div>
        <div className="nav-items">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contenedores</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Áridos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Tierra negra</a></li>
                  <li><a className="dropdown-item" href="#">Tierra colorada</a></li>
                  <li><a className="dropdown-item" href="#">Tosca</a></li>
                  <li><a className="dropdown-item" href="#">Cascotes</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar