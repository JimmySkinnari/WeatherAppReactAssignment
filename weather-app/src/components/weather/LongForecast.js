import React from 'react'


// icon imports
import { TiWeatherCloudy } from 'react-icons/fa';
import { TiWeatherDownpour } from 'react-icons/fa';
import { TiWeatherNight } from 'react-icons/fa';
import { TiWeatherPartlySunny } from 'react-icons/fa';
import { TiWeatherShower } from 'react-icons/fa';
import { TiWeatherSnow } from 'react-icons/fa';
import { TiWeatherStormy } from 'react-icons/fa';
import { TiWeatherSunny } from 'react-icons/fa';
import { TiWeatherWindyCloudy } from 'react-icons/fa';
import { TiWeatherWindy } from 'react-icons/fa';



function GetDay(date){

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(date);
    let dayName = days[d.getDay()];

    return dayName;


}

function GetIcon(weather){

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(date);
    let dayName = days[d.getDay()];

    return dayName;


}


const LongForecast = ({longResult}) => {
    return (
    <div className="longweather">    
        <br></br>
        <p>Tomorrow: Max: <label className="degree">{longResult.list[8].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[8].main.temp_min}</label> °C {GetIcon(longResult.list[9].weather[0].main)}</p>
        <br></br>
        <p>{GetDay(longResult.list[15].dt_txt)} :  Max: <label className="degree">{longResult.list[15].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[15].main.temp_min}</label> °C {GetIcon(longResult.list[15].weather[0].main)}</p>
        <br></br>
        <p>{GetDay(longResult.list[23].dt_txt)} : Max: <label className="degree">{longResult.list[23].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[23].main.temp_min}</label> °C {GetIcon(longResult.list[23].weather[0].main)}</p>
        <br></br>
        <p>{GetDay(longResult.list[31].dt_txt)} : Max: <label className="degree">{longResult.list[31].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[31].main.temp_min}</label> °C {GetIcon(longResult.list[31].weather[0].main)}</p>
        <br></br>
        <p>{GetDay(longResult.list[39].dt_txt)} : Max: <label className="degree">{longResult.list[39].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[39].main.temp_min}</label> °C {GetIcon(longResult.list[39].weather[0].main)}</p>
      </div> 
    )
}

export default LongForecast

