import "./App.css";
import CreateNotes from "./components/CreateNotes";
import DisplayNotes from "./components/DisplayNotes";

function App() {
  return (
    <div className="App">
      <div className="create-notes-div">
        <CreateNotes />
      </div>
      <div className="display-notes-div">
        <DisplayNotes />
      </div>
    </div>
  );
}

export default App;
