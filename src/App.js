import logo from './logo.svg';
import './App.css';
require('dotenv').config()
const apiKey = process.env.APIKEY;
const baseURL = process.env.BASEURL;


function App() {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let dateUpdate = new Date();
  let day = days[dateUpdate.getDay()];
  let month = months[dateUpdate.getMonth()];
  let date = dateUpdate.getDate(); 
  let year = dateUpdate.getFullYear();

  let fullDate = `${day} ${month} ${date} ${year}`

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
        <div className="location-box">
          <div className="location"> New York City, US</div>
          <div className="date">{fullDate}</div>
          
        </div>
        <div className="weather-box">
          <div className="temp">
            15 c
          </div>  
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
