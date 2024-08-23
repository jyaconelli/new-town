import './TownMap.css'

import Arcade from '../Buildings/Arcade'
import BuildingLayout from '../BuildingLayout/BuildingLayout'
import Cinema from '../Buildings/Cinema'
import ClockTower from '../Buildings/ClockTower'
import Home from '../Buildings/Home'
import Library from '../Buildings/Library'
import ParkTownSquare from '../Buildings/ParkTownSquare'
import PostOffice from '../Buildings/PostOffice'
// TownMap.tsx
import React from 'react'
import SchoolOffice from '../Buildings/SchoolOffice'
import TrainStation from '../Buildings/TrainStation'
import { defaultTheme } from '../themes'

interface TownMapProps {
  columns: number
  rows: number
}

const TownMap: React.FC<TownMapProps> = ({ columns, rows }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, calc(100% / ${columns}))`,
    gridTemplateRows: `repeat(${rows}, calc(100% / ${rows}))`,
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className="town-map-background">
        <img src={defaultTheme.backgroundImage} />
      </div>
      <div className="town-map" style={gridStyle}>
        <BuildingLayout name="Clock Tower" x={10} y={2} width={2} height={3}>
          <ClockTower />
        </BuildingLayout>
        <BuildingLayout name="Library" x={2} y={3} width={2} height={2}>
          <Library />
        </BuildingLayout>
        <BuildingLayout name="Arcade" x={4} y={0} width={3} height={2}>
          <Arcade />
        </BuildingLayout>
        <BuildingLayout name="Post Office" x={1} y={5} width={2} height={2}>
          <PostOffice />
        </BuildingLayout>
        <BuildingLayout name="School/Office" x={5} y={5} width={2} height={2}>
          <SchoolOffice />
        </BuildingLayout>
        <BuildingLayout name="Home" x={9} y={5} width={2} height={2}>
          <Home />
        </BuildingLayout>
        <BuildingLayout name="Park/Town Square" x={6} y={3} width={3} height={2}>
          <ParkTownSquare />
        </BuildingLayout>
        <BuildingLayout name="Train Station" x={2} y={7} width={2} height={1}>
          <TrainStation />
        </BuildingLayout>
        <BuildingLayout name="Cinema" x={5} y={1} width={1} height={1}>
          <Cinema />
        </BuildingLayout>
      </div>
    </div>
  )
}

export default TownMap

/*
    backgroundImage: `url(${defaultTheme.backgroundImage})`, // Use the background image from the theme
    backgroundColor: 'skyblue', // Use the background image from the theme
    backgroundSize: 'cover', // Ensure the image covers the entire area
*/
