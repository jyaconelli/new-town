import AnalogClock from './Clock/AnalogClock'
import TownMapContainer from './TownMap/TownMapContainer'

export const NewTab = () => {
  return (
    <div>
      <TownMapContainer />
      <AnalogClock />
    </div>
  )
}

export default NewTab
