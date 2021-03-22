import React from 'react'

const TodayForecast = ({todayResult, onShowLongForecast}) => {
    return (     
        <div className="TodayForecast">
        <h1 className="city">{todayResult.name}</h1>
        <br></br>
        <p>Temp now:  <label className="degree">{todayResult.main.temp} °C</label></p>
        <br></br>
        <p>Max temp:  <label className="degree">{todayResult.main.temp_max} °C</label></p>
        <br></br>
        <p> Min temp:  <label className="degree">{todayResult.main.temp_min} °C</label></p>
        <br></br>
        <button className="btn showLongForecast" onClick={onShowLongForecast}>Show long forecast</button>
        
        </div>
    ) 
}

export default TodayForecast

