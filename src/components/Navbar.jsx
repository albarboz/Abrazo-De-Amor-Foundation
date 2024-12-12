import React from "react";
import { useModal } from '../contexts/ModalContext';

const Navbar = () => {
  const { handleShow } = useModal();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#006D77'}}>
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="#">Abrazo De Amor</a>
        <button
          className="navbar-toggler border-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            outline: 'none', 
            boxShadow: 'none'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light fs-4 m-2 p-0 fw-semibold" href="#about">
                Donar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#services">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <button 
                className="btn btn-outline-light nav-link fw-semibold border-0"
                style={{ cursor: 'pointer' }}
                onClick={handleShow}
              >
                Contactar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
