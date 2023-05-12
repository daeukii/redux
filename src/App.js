import './App.css';
import CounterBox from './components/CounterBox';
import ExCounterBox from './components/ExCounterBox';
import CounterNumber from './components/CounterNumber';
import MemoComp from './components/MemoComp';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <ExCounterBox />
      <CounterNumber />
      <MemoComp />
    </div>
  );
}

export default App;