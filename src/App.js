import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;