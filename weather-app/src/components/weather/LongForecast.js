import React from 'react'



function GetDay(date){

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(date);
    let dayName = days[d.getDay()];

    return dayName;


}


const LongForecast = ({longResult}) => {
    return (
        <div className="weather">    

        <br></br>
        <p>Tomorrow: Max: <label className="degree">{longResult.list[8].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[8].main.temp_min}</label> °C</p>
        <br></br>
        <p>{GetDay(longResult.list[15].dt_txt)} :  Max: <label className="degree">{longResult.list[15].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[15].main.temp_min}</label> °C</p>
        <br></br>
        <p>{GetDay(longResult.list[23].dt_txt)} : Max: <label className="degree">{longResult.list[23].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[23].main.temp_min}</label> °C</p>
        <br></br>
        <p>{GetDay(longResult.list[31].dt_txt)} : Max: <label className="degree">{longResult.list[31].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[31].main.temp_min}</label> °C</p>
        <br></br>
        <p>{GetDay(longResult.list[39].dt_txt)} : Max: <label className="degree">{longResult.list[39].main.temp_max}</label> °C - Min: <label className="degree">{longResult.list[39].main.temp_min}</label> °C</p>
      </div>
            
        
    )
}

export default LongForecast

