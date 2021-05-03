//import logo from './logo.svg';
//import './App.css';
import React,  {useState} from 'react';
require('dotenv').config()

const REACT_APP_apiKey = process.env.REACT_APP_APIKEY;
const REACT_APP_baseURL = process.env.REACT_APP_BASEURL;

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      console.log(REACT_APP_apiKey)
      console.log(REACT_APP_baseURL)

      fetch(`${REACT_APP_baseURL}weather?q=${query}&units=metric&APPID=${REACT_APP_apiKey}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result) //updated value set from api call result
      })
    }
  }

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let dateUpdate = new Date();
  let day = days[dateUpdate.getDay()];
  let month = months[dateUpdate.getMonth()];
  let date = dateUpdate.getDate(); 
  let year = dateUpdate.getFullYear();

  let fullDate = `${day} ${month} ${date} ${year}`

  return (
    <div className={(typeof weather.main != "undefined") 
      ? ((weather.main.temp > 16) 
        ? 'app warm' 
        : 'app') 
      : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search. . ."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location"> {weather.name}, {weather.sys.country}</div>
            <div className="date">{fullDate}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{Math.round(weather.main.temp)}˚c</div>  
          <div className="weather">{weather.weather[0].main}</div>
        </div>
        </div>
        ) : ('Please enter the name of a city above ')}
      </main>
    </div>
  );
}

export default App;
