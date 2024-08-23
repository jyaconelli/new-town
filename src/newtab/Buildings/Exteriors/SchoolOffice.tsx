import Building from '../Building'
import LibraryInterior from '../Interiors/LibraryInterior'
import React from 'react'
import { buildingMetadata } from '../../utils'

const SchoolOffice: React.FC = () => {
  return <Building metadata={buildingMetadata.schoolOffice} InteriorComponent={LibraryInterior} />
}

export default SchoolOffice
