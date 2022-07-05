import React,{useState} from "react";
import axios from "axios";

const Weather = () => {
    
    const url='https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8b037a43dff0caa8cf3d47de56123337';
    return ( 
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>Nairobi</p>
                </div>
                <div className="temp">
                    <h1>31°C</h1>
                </div>
                <div className="description">
                    Cloudy
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    <p>35°C</p>
                </div>
                <div className="humidity">
                    <p>58%</p>
                </div>
                <div className="wind">
                    <p>13 km/h</p>
                </div>
            </div>
        </div>
     );
}
 
export default Weather;