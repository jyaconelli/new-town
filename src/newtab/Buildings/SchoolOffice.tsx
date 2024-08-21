import Building from './Building'
import React from 'react'
import { buildingMetadata } from '../utils'

const SchoolOffice: React.FC = () => {
  return (
    <Building
      metadata={buildingMetadata.schoolOffice}
      exteriorImage="/path/to/schooloffice-exterior.png"
      interiorImage="/path/to/schooloffice-interior.png"
    />
  )
}

export default SchoolOffice
