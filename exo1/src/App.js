import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome/welcome';

function App() {
  return (
    <div className="App">
      <Welcome nom="khadija" age={31}/>
    </div>
  );
}

export default App;
