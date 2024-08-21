import Building from './Building'
import React from 'react'
import { buildingMetadata } from '../utils'

const TrainStation: React.FC = () => {
  return (
    <Building
      metadata={buildingMetadata.trainStation}
      exteriorImage="/path/to/trainstation-exterior.png"
      interiorImage="/path/to/trainstation-interior.png"
    />
  )
}

export default TrainStation
