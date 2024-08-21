import './TownMapContainer.css'

// TownMapContainer.tsx
import React from 'react'
import TownMap from './TownMap'

const TownMapContainer: React.FC = () => {
  const columns = 12
  const rows = 7

  return (
    <div className="town-map-container">
      <div className="town-map-wrapper">
        <TownMap columns={columns} rows={rows} />
      </div>
    </div>
  )
}

export default TownMapContainer
