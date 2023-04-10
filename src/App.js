// import logo from './logo.svg';
import './App.css';
// import Contador from './components/Contador';
import Cards from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Contador inicial={0} factor={2}></Contador> */}
        <Cards></Cards>
      </header>
    </div>
  );
}

export default App;
