import Building from '../Building'
import LibraryInterior from '../Interiors/LibraryInterior'
import { buildingMetadata } from '../../utils'

const ClockTower = () => {
  const handleClockTowerReminder = () => {
    console.log('Triggering clock tower reminder...')
    // Custom reminder logic here
  }

  return (
    <Building
      metadata={buildingMetadata.clockTower}
      specialFunctionality={handleClockTowerReminder}
      InteriorComponent={LibraryInterior}
    />
  )
}

export default ClockTower
