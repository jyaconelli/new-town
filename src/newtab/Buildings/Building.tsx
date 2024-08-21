import './Building.css'

// Building.tsx
import React, { useEffect, useState } from 'react'

import { BuildingMetadata } from '../utils'
import Modal from '../Modal/Modal'

interface BuildingProps {
  metadata: BuildingMetadata
  InteriorComponent: React.FC<{
    metadata: BuildingMetadata
    bookmarks: { url: string; title: string }[]
  }>
  specialFunctionality?: () => void
}

const Building: React.FC<BuildingProps> = ({
  metadata,
  InteriorComponent,
  specialFunctionality,
}) => {
  const { label, category, exteriorImage, interiorImage } = metadata
  const [isOpen, setIsOpen] = useState(false)
  const [bookmarks, setBookmarks] = useState<{ url: string; title: string }[]>([])

  const handleOpen = () => {
    setIsOpen(true)
    fetchBookmarks()
    if (specialFunctionality) {
      specialFunctionality()
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const fetchBookmarks = () => {
    chrome.storage.sync.get([category], (result) => {
      setBookmarks(result[category] || [])
    })
  }

  return (
    <div className="building-container" onClick={handleOpen}>
      <div className="building-image-wrapper">
        <img src={exteriorImage} alt={`${label} Image`} className="building-image" />
      </div>
      <div className="building-name">{label}</div>

      {isOpen && (
        <Modal onClose={handleClose} backgroundImage={interiorImage}>
          <InteriorComponent metadata={metadata} bookmarks={bookmarks} />
        </Modal>
      )}
    </div>
  )
}

export default Building
