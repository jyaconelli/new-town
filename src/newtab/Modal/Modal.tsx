import './Modal.css'

// Modal.tsx
import React, { useState } from 'react'

interface ModalProps {
  onClose: () => void
  backgroundImage: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ onClose, backgroundImage, children }) => {
  const [isExiting, setIsExiting] = useState(false)

  const handleExit = () => {
    setIsExiting(true) // Start the exit animation
    setTimeout(() => {
      onClose() // Call the onClose prop after the animation completes
    }, 500) // Match the duration of the slide-out animation (0.5s)
  }

  return (
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div
        className={`modal-content ${isExiting ? 'slide-down' : 'slide-up'}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
        <button
          className="close-button"
          onClick={(e) => {
            e.stopPropagation()
            handleExit()
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
