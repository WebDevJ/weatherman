import logo from './logo.svg';
import './App.css';
require('dotenv').config()
const apiKey = process.env.APIKEY;


function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search. . ."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
