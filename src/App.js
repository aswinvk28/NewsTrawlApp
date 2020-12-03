import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';
import IFrame from './components/IFrame';

function App() {
  return (
    <div className="App">
      <div className="app-sidebar">
        <Slider />
      </div>
      <div className="column">
        <IFrame />
      </div>
    </div>
  );
}

export default App;
