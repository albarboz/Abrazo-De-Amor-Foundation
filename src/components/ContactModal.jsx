import React from 'react';
import { Modal } from 'react-bootstrap';
import instagramIcon from '../assets/instagram.svg';
import facebookIcon from '../assets/facebook.svg';

export default function ContactModal({ showModal, handleClose }) {

    return (
        <Modal show={showModal} onHide={handleClose} >
            <Modal.Header closeButton style={{ backgroundColor: '#F7F7F8', color: 'black' }}>
                <Modal.Title>Información De Contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#F7F7F8', color: 'black' }}>
                <p>
                    <strong>Correo Electrónico:</strong>{' '}
                    <a
                        href="mailto:abrazodeamorfundacion@gmail.com"
                        style={{ color: '#007bff', textDecoration: 'none' }}
                    >
                        abrazodeamorfundacion@gmail.com
                    </a>
                </p>
                <p>
                    <strong>Teléfono:</strong> +1 (425) 343-9538
                </p>
                <p>
                    <strong>Dirección:</strong> 121 N LEWIS ST, MONROE WA 98272
                </p>
                <p>
                    <strong>Horario De Operación:</strong>
                    <br />
                    <strong>Mon-Fri:</strong> 10am - 8pm <br />
                    <strong>Sat:</strong> 10am - 6pm <br />
                    <strong>Sun:</strong> Closed
                </p>
            </Modal.Body>
            <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F7F7F8', padding: '3px' }}>
                <button onClick={handleClose} className="btn"
                    type="button" class="btn btn-dark"
                    style={{
                        marginLeft: '15px',
                        color: 'white',
                        border: 'none',
                        '--bs-btn-padding-y': '.78rem',
                        '--bs-btn-padding-x': '2rem',
                        '--bs-btn-font-size': '1rem',
                    }}>
                    Close
                </button>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginRight: '12px' }}>
                    <a href="https://www.facebook.com/profile.php?id=100039336022722" target="_blank" rel="noopener noreferrer">
                        <img
                            src={facebookIcon}
                            alt="Facebook"
                            style={{ width: '42px', height: '74px', cursor: 'pointer' }}
                        />
                    </a>
                    <a href="https://www.instagram.com/nadiaelizabethgutierrez/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={instagramIcon}
                            alt="Instagram"
                            style={{ width: '49px', height: '65px', cursor: 'pointer' }}
                        />
                    </a>
                </div>
            </Modal.Footer>
        </Modal>
    )
}