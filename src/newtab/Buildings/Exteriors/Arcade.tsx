import Building from '../Building'
import LibraryInterior from '../Interiors/LibraryInterior'
import React from 'react'
import { buildingMetadata } from '../../utils'
const Arcade: React.FC = () => {
  return <Building metadata={buildingMetadata.arcade} InteriorComponent={LibraryInterior} />
}

export default Arcade
