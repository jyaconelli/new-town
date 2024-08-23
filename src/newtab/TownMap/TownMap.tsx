import './TownMap.css'

// TownMap.tsx
import React, { useEffect, useRef } from 'react'

import Arcade from '../Buildings/Exteriors/Arcade'
import BackgroundAudio from '../BackgroundAudio/BackgroundAudio'
import BuildingLayout from '../BuildingLayout/BuildingLayout'
import Cinema from '../Buildings/Exteriors/Cinema'
import ClockTower from '../Buildings/Exteriors/ClockTower'
import Home from '../Buildings/Exteriors/Home'
import Library from '../Buildings/Exteriors/Library'
import ParkTownSquare from '../Buildings/Exteriors/ParkTownSquare'
import PostOffice from '../Buildings/Exteriors/PostOffice'
import SchoolOffice from '../Buildings/Exteriors/SchoolOffice'
import TrainStation from '../Buildings/Exteriors/TrainStation'
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
        <BuildingLayout name="Arcade" x={8} y={1} width={2} height={2}>
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
        <BuildingLayout name="Train Station" x={11} y={5} width={2} height={2}>
          <TrainStation />
        </BuildingLayout>
        <BuildingLayout name="Cinema" x={5} y={1} width={2} height={2}>
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
