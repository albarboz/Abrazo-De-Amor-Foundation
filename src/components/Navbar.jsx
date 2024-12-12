import React from "react";
import { useModal } from '../contexts/ModalContext';

const Navbar = () => {
  const { handleShow } = useModal();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark pt-3" style={{ backgroundColor: '#006D77' }}>
      <div className="container-fluid">
        <a className="navbar-brand fs-4 m-2 fw-semibold pt-2" href="#">Abrazo De Amor</a>
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
              {/* Large screens: smaller font */}
              <a className="nav-link text-light fs-5 m-2 p-0 d-none d-lg-inline" href="#about">
                Donar
              </a>
              {/* Small screens: larger font */}
              <a className="nav-link text-light fs-2 m-2 p-4 d-inline d-lg-none" href="#about">
                Donar
              </a>
            </li>
            <li className="nav-item">
              {/* Large screens: smaller font */}
              <a className="nav-link text-light fs-5 m-2 p-0 d-none d-lg-inline" href="#about">
                Acerca De
              </a>
              {/* Small screens: larger font */}
              <a className="nav-link text-light fs-2 m-2 p-4 d-inline d-lg-none" href="#about">
                Acerca De
              </a>
            </li>
            <li className="nav-item">
              {/* Large screens: smaller font */}
              <a className="nav-link text-light fs-5 m-2 p-0 d-none d-lg-inline" href="#about">
              Contáctanos
              </a>
              {/* Small screens: larger font */}
              <a className="nav-link text-light fs-2 m-2 p-4 d-inline d-lg-none" href="#about">
                Contáctanos
              </a>
            </li>






            {/* <li className="nav-item">
              <a className="nav-link text-light fs-2 m-2 p-0" href="#services">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-2 m-2 p-0" onClick={handleShow}>
                Contactar
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
