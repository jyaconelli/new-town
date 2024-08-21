import Building from './Building'
import React from 'react'
import { buildingMetadata } from '../utils'

const ParkTownSquare: React.FC = () => {
  return (
    <Building
      exteriorImage="/path/to/park-exterior.png"
      interiorImage="/path/to/park-interior.png"
      metadata={buildingMetadata.parkTownSquare}
    />
  )
}

export default ParkTownSquare
