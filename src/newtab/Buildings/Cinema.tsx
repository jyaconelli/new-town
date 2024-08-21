import Building from './Building'
import React from 'react'
import { buildingMetadata } from '../utils'

const Cinema: React.FC = () => {
  return (
    <Building
      exteriorImage="/path/to/cinema-exterior.png"
      interiorImage="/path/to/cinema-interior.png"
      metadata={buildingMetadata.cinema}
    />
  )
}

export default Cinema
