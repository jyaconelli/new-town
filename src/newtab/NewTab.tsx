import AnalogClock from './Clock/AnalogClock'
import TownMapContainer from './TownMap/TownMapContainer'
import WeatherEffects from './Weather/WeatherOverlay'

export const NewTab = () => {
  return (
    <div>
      <WeatherEffects>
        <TownMapContainer />
        {/* <AnalogClock /> */}
      </WeatherEffects>
    </div>
  )
}

export default NewTab
