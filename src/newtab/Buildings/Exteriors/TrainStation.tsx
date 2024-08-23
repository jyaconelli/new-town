import Building from '../Building'
import LibraryInterior from '../Interiors/LibraryInterior'
import React from 'react'
import { buildingMetadata } from '../../utils'

const TrainStation: React.FC = () => {
  return <Building metadata={buildingMetadata.trainStation} InteriorComponent={LibraryInterior} />
}

export default TrainStation
