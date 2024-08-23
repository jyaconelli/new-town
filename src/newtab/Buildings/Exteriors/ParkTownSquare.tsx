import Building from '../Building'
import LibraryInterior from '../Interiors/LibraryInterior'
import React from 'react'
import { buildingMetadata } from '../../utils'

const ParkTownSquare: React.FC = () => {
  return <Building InteriorComponent={LibraryInterior} metadata={buildingMetadata.parkTownSquare} />
}

export default ParkTownSquare
