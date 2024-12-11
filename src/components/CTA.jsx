import React from 'react';
import { useModal } from '../contexts/ModalContext';
import ContactModal from './ContactModal';


// Call to action 
function CTA() {
  const { showModal, handleClose, handleShow } = useModal();

  return (
    <section style={{ backgroundColor: '#006D77', color: 'white', textAlign: 'center', padding: '2rem 0' }}>
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <h2>Únete A Nuestra Misión</h2>
        <p>Ayúdanos a hacer la diferencia hoy.</p>
        <button
          onClick={handleShow}
          className="btn btn-outline-light btn-lg "
          type="button"
          style={{
            border: '2px solid white',
            '--bs-btn-padding-y': '.55rem',
            '--bs-btn-padding-x': '.85rem',
            '--bs-btn-font-size': '1.3rem',
          }}>
          Contáctanos
        </button>
        <ContactModal showModal={showModal} handleClose={handleClose} />
      </div>
    </section>
  );
}

export default CTA;
