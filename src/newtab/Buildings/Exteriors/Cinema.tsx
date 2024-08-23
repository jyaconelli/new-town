import Building from '../Building'
import LibraryInterior from '../Interiors/LibraryInterior'
import React from 'react'
import { buildingMetadata } from '../../utils'

const Cinema: React.FC = () => {
  return <Building metadata={buildingMetadata.cinema} InteriorComponent={LibraryInterior} />
}

export default Cinema
