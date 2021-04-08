import React from 'react'
import LongForecast from './LongForecast'
import TodayForecast from './TodayForecast'

const WeatherDisplay = ({isLoading, results, longResult, showLongForecast, onShowLongForecast}) => {
    return isLoading ? (<h1>Loading</h1>
    ) : (
        <div className="weather">
        <TodayForecast todayResult={results}
                       onShowLongForecast={onShowLongForecast} 
                       />        
        {showLongForecast && <LongForecast longResult ={longResult} />}
        </div>
    )
}
export default WeatherDisplay
