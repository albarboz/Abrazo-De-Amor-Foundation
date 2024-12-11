import React from "react";
import { useModal } from '../contexts/ModalContext';


const Navbar = () => {
  const { handleShow } = useModal()

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#006D77' }}>
      <div className="container">
        <a className="navbar-brand text-white" href="#">Abrazo De Amor</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: 'white', border: 'white' }}
        >
          <span className="navbar-toggler-icon" style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#about">Donar</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#services">Acerca de</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact" onClick={handleShow}>Contactar</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
