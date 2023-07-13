import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload. Lolz!!.
          <br></br>
          Used Github workflows for this . YAyyyy!YY!!
          <br></br>
          <br></br>
        </p> */}
        <HomePage />
        <br></br>
        <img
          src="https://media4.giphy.com/media/4DUjG2ei31nA2evo5g/200w.gif?cid=790b7611hq60sh2uu6n5hrt22c47uge4rw7n1b5ym4exe2cf&ep=v1_gifs_search&rid=200w.gif&ct=g"
          alt="Lets Danceece !!"
        ></img>
        <br></br>
        <br></br>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=hiRacdl02w4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to Learn
        </a>
      </header>
    </div>
  );
}

export default App;
