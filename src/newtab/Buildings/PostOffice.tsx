import Building from './Building'
import React from 'react'
import { buildingMetadata } from '../utils'

const PostOffice: React.FC = () => {
  return (
    <Building
      metadata={buildingMetadata.postOffice}
      exteriorImage="/path/to/postoffice-exterior.png"
      interiorImage="/path/to/postoffice-interior.png"
    />
  )
}

export default PostOffice
