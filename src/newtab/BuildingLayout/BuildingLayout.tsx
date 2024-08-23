import './BuildingLayout.css'

// BuildingLayout.tsx
import React from 'react'

interface BuildingLayoutProps {
  name: string
  height: number
  width: number
  x: number
  y: number
}

const BuildingLayout: React.FC<React.PropsWithChildren<BuildingLayoutProps>> = ({
  name,
  height,
  width,
  x,
  y,
  children,
}) => {
  const buildingStyle = {
    gridColumn: `${x} / span ${width}`,
    gridRow: `${y} / span ${height}`,
  }

  return (
    <div className="building" style={buildingStyle}>
      {children}
    </div>
  )
}

export default BuildingLayout
