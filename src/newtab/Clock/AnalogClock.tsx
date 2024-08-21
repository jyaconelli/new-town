import './AnalogClock.css'

// AnalogClock.tsx
import React, { useEffect, useState } from 'react'

const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  // Correct angle calculations
  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours() % 12

  console.log(hours, minutes, seconds)
  const offset = 90
  const secondDegree = (seconds / 60) * 360 - offset
  const minuteDegree = (minutes / 60) * 360 - offset // Add seconds for smooth transition
  const hourDegree = (hours / 12) * 360 - offset // Add minutes for smooth transition

  // Array of hour numbers (1 to 12) and their positions around the clock
  const hourNumbers = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div className="clock">
      <div className="clock-face">
        <div style={{ transform: `rotate(24deg) translateY(-10px)`, position: 'absolute', left: '50%', top: '50%' }}>
          {hourNumbers.map((number, index) => (
            <div
              key={index}
              className="clock-number"
              style={{
                transform: `rotate(${index * 30 - offset}deg) translate(90px) rotate(-${index * 30 - offset}deg)`,
              }}
            >
              {number}
            </div>
          ))}
        </div>
        <div className="hand hour-hand" style={{ transform: `rotate(${hourDegree}deg)` }} />
        <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegree}deg)` }} />
        <div className="hand second-hand" style={{ transform: `rotate(${secondDegree}deg)` }} />
      </div>
    </div>
  )
}

export default AnalogClock
