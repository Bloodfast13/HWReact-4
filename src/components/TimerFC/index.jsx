import React from 'react'
import style from '../style.module.css'
import Start from '../Img/icons8-start-24.png'
import Stop from '../Img/icons8-stop-24.png'

const Timer = () => {
  const [start, setStart] = React.useState(false)
  const [timer, setTimer] = React.useState(null)
  const [time, setTime] = React.useState('00:00:00')

  React.useEffect(() => {
    if(!start){
      console.log('TimerFC stoped & unrendered')
      clearInterval(timer)
      setTime('')
    } else {
      console.log('TimerFC rendered')
      setTime('00:00:00')
      timerStop()
    }
  }, [start])

  React.useEffect(() => {
    console.log('TimeFC did update')
  }, [time])

  React.useEffect(() => {
    console.log('TimerFC update all')
  })

  const stopTimer = () => {
    setStart(!start)
  }

  const timerStop = () => {
    const startTime = new Date()
    const timer = setInterval(() => {
      const date = new Date(new Date() - startTime)
      date.setHours(date.getHours() - 3)
      setTime(date.toLocaleTimeString())
    })
    setTimer(timer)
  }

  return (
    <div className={style.Wrapper}>
        <h1>FC Timer</h1>
      <div>
        <button onClick={stopTimer}>
          <img src={start ? Stop : Start}></img>
        </button>
      </div>
        <p>{time}</p>
    </div>
  )
}

export default React.memo(Timer)