import React from "react";
import "./weather.css";

function Weather() {
  return (
    <div className="weather">
      <span className="title">Weather Application</span>
      <br />
      <br />
      <form>
        <input type="text" placeholder="Country Name" name="Country Name"/>
        <button className="getweather">Submit</button>
        
      </form>
    </div>
  );
}

export default Weather;