import Building from './Building'
import { buildingMetadata } from '../utils'

const ClockTower = () => {
  const handleClockTowerReminder = () => {
    console.log('Triggering clock tower reminder...')
    // Custom reminder logic here
  }

  return (
    <Building
      metadata={buildingMetadata.clockTower}
      exteriorImage="/path/to/clocktower-exterior.png"
      interiorImage="/path/to/clocktower-interior.png"
      specialFunctionality={handleClockTowerReminder}
    />
  )
}

export default ClockTower
