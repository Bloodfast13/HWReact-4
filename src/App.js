import React from 'react';
import './App.css';
import TimerFC from './components/TimerFC'
import TimerClass from './components/TimerClass'
import Stop from './components/Img/icons8-stop-24.png'
import Start from './components/Img/icons8-start-24.png'

function App() {
  const [timerStart, setTimerStart] = React.useState(false)
  return (
    <div className="App">
      <TimerFC />
      <div className='Wrapper'>
        <hr/>
        <h1>Class Timer</h1>
        <div>
          <button onClick={() => setTimerStart(!timerStart)}>
            {timerStart ? <img src={Stop}/> : <img src={Start}/>}
          </button>
        </div>
        {timerStart ? <TimerClass /> : null}
        </div>
    </div>
  );
}

export default App;
