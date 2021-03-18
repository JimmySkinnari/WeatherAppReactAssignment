import React from 'react'

const TodayForecast = ({todayResult}) => {
    return (
      
            
        <div className="TodayForecast">
        <h1>{todayResult.name}</h1>
        <br></br>
        <p>Temp now: {todayResult.main.temp_min}</p>
        <br></br>
        <p>Temp max: {todayResult.main.temp_max}</p>
        <br></br>
        <p>Temp min: {todayResult.main.temp_min}</p>
        
        </div>
    
    )
}

export default TodayForecast

