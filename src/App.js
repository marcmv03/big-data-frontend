
import react from 'react';
import './App.css';
import {React,useState} from 'react'
import { RealTimeData } from './components/RealTimeData';
import { HistoricalData } from './components/HistoricalData';
function App() {
  const [view,setView] = useState(false) ;
  return (
    <div>
    <header>Weather and Data pollution</header>
    <div>
    <ul>
          <li>
          <button onClick = {() => {setView(false)}} type="button">Stream Data</button>
          </li>
          <li>
              <button onClick = {() => {setView(true)}} type="button">Historical Data</button>
          </li>
            </ul>
      {!view ? <RealTimeData /> : <HistoricalData/> }
    </div>
    </div>
  );
}

export default App;
