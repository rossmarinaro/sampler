
import './App.css';
import { PIANO } from './components/piano/main';


function App() {
  
  return (

    <div className="App container" id="main-container">

      <header className="App-header">

      </header>

        <div className="container" id="piano-rack">
          <PIANO />
        </div>
        <div className="container" id="workspace">   
{/* **
          <div class="container" >
            <form >
              <input class="form-input" id="build-project" type="submit" value="Build" name="buildButton"/>
              <input class="form-input" id="test-input" type="submit" value="Test" name="testButton"/>
              <input class="form-input" type="submit" value="Open" name="openButton"/>
              <input class="form-input" type="submit" value="Save" name="saveButton"/>
            </form>
            <br>
            <form >
              <input id="game-width-bar" class="form-input" type="text" placeholder="width" name="username" minLength="2" maxLength="10" />
              <input id="game-height-bar" class="form-input" type="text" placeholder="height" name="username" minLength="2" maxLength="10" />
              <input class="form-input" id="make-canvas" type="submit" value="Apply" name="submitButton"/>
              <input class="form-input" id="reset-canvas" type="submit" value="Reset" name="resetButton"/>
            </form>
          </div>
          <div class="container">
            <h1>Tools</h1>
            <form id="tools">
              <input class="form-input" id="add-square" type="submit" value="Add Square" name="toolButton"/>
              <input id="sq-pos-x" class="form-input" type="number" placeholder="X" name="square-pos-x" />
              <input id="sq-pos-y" class="form-input" type="number" placeholder="Y" name="square-pos-y" />
            </form>
          </div> */}
   

      </div>


    </div>
  );
}

export default App;


