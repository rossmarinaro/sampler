
import './App.css';
import { PIANO } from './components/piano/main';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
  {/*       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a> */}
          <PIANO />
      </header>
    
    </div>
  );
}

export default App;


