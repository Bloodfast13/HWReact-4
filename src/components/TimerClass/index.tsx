import React from 'react'
import style from '../style.module.css'
import Start from '../Img/icons8-start-24.png'
import Stop from '../Img/icons8-stop-24.png'

interface State {
  time: number,
  start: number
}

export default class Timer2 extends React.Component<{}, State> {
  timer: any

  state = {
    time: 0,
    start: Date.now()
  }

  componentDidMount() {
    console.log('TimerClass rendered')
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1000)
  }

  shouldComponentUpdate(nextProto: {}, nextState: State) {
    console.log('TimerClass updated becouse time changed')
    return nextState !== this.state
  }

  componentDidUpdate(prevProto: {}, prevState: State) {
    console.log('TimerClass updated')
  }

  componentWillUnmount() {
    console.log('TimerClass stoped & unrendered')
    clearInterval(this.timer)
  }

  stopTimer() {
    const startTimer = new Date(this.state.time)
    const date = startTimer
    date.setHours(date.getHours() - 3)
    return date.toLocaleTimeString()
  }

  render() {
    return (
        <p>{this.stopTimer()}</p>
    )
  }
}