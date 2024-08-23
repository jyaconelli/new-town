import Building from './Building'
import LibraryInterior from './LibraryInterior'
import React from 'react'
import { buildingMetadata } from '../utils'

const Library: React.FC = () => {
  return <Building metadata={buildingMetadata.library} InteriorComponent={LibraryInterior} />
}

export default Library
