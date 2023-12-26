import './App.css';
import Gauge from "./chart/Gauge";
import {LineGraph} from "./chart/LineGraph";

function App() {


  return (
      <div className="App">
        <Gauge/>
        <LineGraph/>
      </div>
  );
}

export default App;
