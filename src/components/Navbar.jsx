import React from "react";
import { useModal } from '../contexts/ModalContext';

const Navbar = () => {
  const { handleShow } = useModal();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark pt-2" style={{ backgroundColor: '#006D77' }}>
      <div className="container-fluid">
        <a className="navbar-brand fs-4 m-2 fw-semibold  ps-1" href="#">Abrazo De Amor</a>
        <button
          className="navbar-toggler border-0 pe-2 mt-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars fa-2x text-white"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ms-auto me-3">
              {/* Large screens: smaller font */}
              <a className="nav-link text-light fs-5 m-1 p-0 d-none d-lg-inline" href="#about">
                Donar
              </a>
              {/* Small screens: larger font */}
              <a className="nav-link text-light fs-1 m-0 p-0  d-inline d-lg-none" href="#about">
                Donar
              </a>
            </li>
            <li className="nav-item ms-auto me-3">
              {/* Large screens: smaller font */}
              <a className="nav-link text-light fs-5 m-1 pb-0 d-none d-lg-inline" href="#acerca-de">
                Acerca De
              </a>
              {/* Small screens: larger font */}
              <a className="nav-link text-light fs-1 p-0 d-inline d-lg-none" href="#acerca-de">
                Acerca De
              </a>
            </li>
            <li className="nav-item ms-auto me-3">
              {/* Large screens: smaller font */}
              <a className="nav-link text-light fs-5 m-1 me-2 p-0 d-none d-lg-inline" href="#" onClick={handleShow}>
                Contáctanos
              </a>
              {/* Small screens: larger font */}
              <a className="nav-link text-light fs-1 m-0 p-0 d-inline d-lg-none" href="#" onClick={handleShow}>
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
