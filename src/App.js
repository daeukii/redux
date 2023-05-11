import './App.css';
import CounterBox from './components/CounterBox';
import ExCounterBox from './components/ExCounterBox';
import CounterNumber from './components/CounterNumber';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <ExCounterBox />
      <CounterNumber />
    </div>
  );
}

export default App;