import './AnalogClock.css'

import React, { Component } from 'react'

const Clock: React.FC = () => {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()

  const hourDeg = (hour + minute / 60 + second / (60 * 60)) * 30
  const minuteDeg = (minute + second / 60) * 6
  const secondDeg = second * 6

  return (
    <div className="clock">
      <div
        className="hour_hand"
        style={{
          transform: `rotateZ(${hourDeg}deg)`,
        }}
      />
      <div
        className="min_hand"
        style={{
          transform: `rotateZ(${minuteDeg}deg)`,
        }}
      />
      <div
        className="sec_hand"
        style={{
          transform: `rotateZ(${secondDeg}deg)`,
        }}
      />
      <span className="twelve">12</span>
      <span className="one">1</span>
      <span className="two">2</span>
      <span className="three">3</span>
      <span className="four">4</span>
      <span className="five">5</span>
      <span className="six">6</span>
      <span className="seven">7</span>
      <span className="eight">8</span>
      <span className="nine">9</span>
      <span className="ten">10</span>
      <span className="eleven">11</span>
    </div>
  )
}

export default Clock
