import React from 'react'
import "../assets/scss/Modal.scss"

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div className="modal-body">{children}</div>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
