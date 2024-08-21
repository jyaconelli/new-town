import Building from './Building'
import React from 'react'
import { buildingMetadata } from '../utils'

const Home: React.FC = () => {
  return (
    <Building
      exteriorImage="/path/to/home-exterior.png"
      interiorImage="/path/to/home-interior.png"
      metadata={buildingMetadata.home}
    />
  )
}

export default Home
