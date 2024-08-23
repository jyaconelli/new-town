import AnalogClock from './Clock/AnalogClock'
import BackgroundAudio from './BackgroundAudio/BackgroundAudio'
import TownMapContainer from './TownMap/TownMapContainer'
import WeatherEffects from './Weather/WeatherOverlay'

export const NewTab = () => {
  return (
    <div>
      <WeatherEffects>
        <BackgroundAudio />
        <TownMapContainer />
        {/* <AnalogClock /> */}
      </WeatherEffects>
    </div>
  )
}

export default NewTab
