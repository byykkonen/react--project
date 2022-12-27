import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        React is so cool!
        </p>
        <h1>Hello World!</h1>
        <p>Very Interesting this REACT!</p>
        <ul>
          <li>Need to go for a run</li>
          <li>Need to watch Harry Potter</li>
          <li>Read A Court of Thorns </li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
