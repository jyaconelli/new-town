import Building from '../Building'
import LibraryInterior from '../Interiors/LibraryInterior'
import React from 'react'
import { buildingMetadata } from '../../utils'

const PostOffice: React.FC = () => {
  return <Building metadata={buildingMetadata.postOffice} InteriorComponent={LibraryInterior} />
}

export default PostOffice
