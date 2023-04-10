// import logo from './logo.svg';
import './App.css';
// import Contador from './components/Contador';
import Card from './components/Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Contador inicial={0} factor={2}></Contador> */}
        <Card></Card>
      </header>
    </div>
  );
}

export default App;
