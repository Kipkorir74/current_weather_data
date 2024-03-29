import React,{useState} from "react";
import axios from "axios";

const Weather = () => {
    const [data,setData]=useState({});
    const [location, setLocation]=useState('')

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8b037a43dff0caa8cf3d47de56123337`;

    //define a search input function to handle search icon
    const searchLocation = (e) =>{

        // eslint-disable-next-line no-restricted-globals
        if(e.key ==="Enter"){
            axios.get(url)
            .then((response)=>{
                setData(response.data);
                console.log(response.data);
            })
            setLocation('')
        }
        
      
    }
    return ( 
        <div className="hk">
           <div className="search">
            <input type="text" 
                value={location} 
                onChange={e => setLocation(e.target.value)} 
                placeholder='Enter a City in the World'
                onKeyPress={searchLocation}
                />
            </div> 
        
        <div className="container">

            <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                     {data.main ? <h1>{data.main.temp} °C</h1>:null}
                
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].main}</p> :null}
                    
                </div>
            </div>
            {data.name != undefined && 
            <div className="bottom">
                <div className="feels">
                    
                        {data.main ? <p>{data.main.feels_like} °C</p> : null}
                        
                    <p>Temperature Inafeel Kama</p>
                </div>

                <div className="humidity">
                    {data.main ?<p className="bold">{data.main.humidity}%</p>:null}
                    <p>Humidity</p>
                </div>

                <div className="wind">
                    {data.wind ?<p className="bold">{data.wind.speed} ms</p>:null}
                    <p>Wind</p>
                </div>

            </div>
            }
            
        </div>
        </div>
   
     );
}
 
export default Weather;