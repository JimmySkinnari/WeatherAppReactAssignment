import React from 'react'

// icon imports
import {
        TiWeatherCloudy,
        TiWeatherDownpour,
        TiWeatherNight,
        TiWeatherPartlySunny,
        TiWeatherShower,
        TiWeatherSnow,
        TiWeatherStormy,
        TiWeatherSunny, 
        TiWeatherWindyCloudy,
        TiWeatherWindy 
       } from 'react-icons/ti';

function GetDay(date){

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(date);
    let dayName = days[d.getDay()];
        
    return dayName;
}

function GetIcon(weather){
    switch(weather) {
        case "Clouds":
          return <TiWeatherCloudy size="20" />
        case "Sunny":
          return <TiWeatherSunny size="20"/>
          case "Snow":
            return <TiWeatherSnow size="20"/>
          case "Rain":
            return <TiWeatherShower size="20"/>
        default:
      }
    return <TiWeatherSunny size="20"/>
}

const LongForecast = ({longResult}) => {
    return (
    <div className="longweather">    
        <br></br>
        <p className="small">max/min</p>
        <p>Tomorrow:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {GetIcon(longResult.list[8].weather[0].main)}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label className="degree">{longResult.list[8].main.temp_max}</label>°C / <label className="degree">{longResult.list[8].main.temp_min}</label>°C </p>
        <br></br>
        <p>{GetDay(longResult.list[15].dt_txt)} :  &nbsp; {GetIcon(longResult.list[15].weather[0].main)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label className="degree">{longResult.list[15].main.temp_max}</label>°C / <label className="degree">{longResult.list[15].main.temp_min}</label>°C</p>
        <br></br>
        <p>{GetDay(longResult.list[23].dt_txt)} :  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{GetIcon(longResult.list[23].weather[0].main)}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label className="degree">{longResult.list[23].main.temp_max}</label>°C / <label className="degree">{longResult.list[23].main.temp_min}</label>°C </p>
        <br></br>
        <p>{GetDay(longResult.list[31].dt_txt)} :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {GetIcon(longResult.list[31].weather[0].main)}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label className="degree">{longResult.list[31].main.temp_max}</label>°C / <label className="degree">{longResult.list[31].main.temp_min}</label>°C </p>
        <br></br>
        <p>{GetDay(longResult.list[39].dt_txt)} :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{GetIcon(longResult.list[39].weather[0].main)}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label className="degree">{longResult.list[39].main.temp_max}</label>°C / <label className="degree">{longResult.list[39].main.temp_min}</label>°C </p>
      </div> 
    )
}

export default LongForecast
