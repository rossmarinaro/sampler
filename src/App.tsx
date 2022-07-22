
import './css/App.css';
import { PIANO } from './components/piano/main';
import { AudioPlayer } from './components/main/audioPlayer';


function App() {
  
  return (

    <div className="App container" id="main-container">

      <header className="App-header">

      </header>

        <div className="container" id="piano-rack"><PIANO /></div>
        <div id="workspace">   
          <div className="container" >
            <AudioPlayer />
            <br></br>
            <form >
              <input id="game-width-bar" className="form-input" type="text" placeholder="width" name="username" minLength={2} maxLength={10} />
              <input id="game-height-bar" className="form-input" type="text" placeholder="height" name="username" minLength={2} maxLength={10} />
              <input className="form-input" id="make-canvas" type="submit" value="Apply" name="submitButton"/>
              <input className="form-input" id="reset-canvas" type="submit" value="Reset" name="resetButton"/>
            </form>
          </div>
          <div className="container">
            <h1>Tools</h1>
            <form id="tools">
              <input className="form-input" id="add-square" type="submit" value="Add Square" name="toolButton"/>
              <input id="sq-pos-x" className="form-input" type="number" placeholder="X" name="square-pos-x" />
              <input id="sq-pos-y" className="form-input" type="number" placeholder="Y" name="square-pos-y" />
            </form>
          </div>
   

      </div>


    </div>
  );
}

export default App;


