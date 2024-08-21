import Building from './Building'
import React from 'react'
import { buildingMetadata } from '../utils'
const Arcade: React.FC = () => {
  return (
    <Building
      metadata={buildingMetadata.arcade}
      exteriorImage="/path/to/arcade-exterior.png"
      interiorImage="/path/to/arcade-interior.png"
    />
  )
}

export default Arcade
