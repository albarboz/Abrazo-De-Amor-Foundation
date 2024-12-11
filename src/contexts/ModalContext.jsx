import React, { createContext, useContext, useState } from 'react';

// Create a context for the modal state
const ModalContext = createContext();

// Create a custom hook to use the modal context
export const useModal = () => {
  return useContext(ModalContext);
};

// Modal provider to manage modal state
export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <ModalContext.Provider value={{ showModal, handleShow, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
};
