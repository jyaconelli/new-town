import Building from '../Building'
import LibraryInterior from '../Interiors/LibraryInterior'
import React from 'react'
import { buildingMetadata } from '../../utils'

const Home: React.FC = () => {
  return <Building InteriorComponent={LibraryInterior} metadata={buildingMetadata.home} />
}

export default Home
