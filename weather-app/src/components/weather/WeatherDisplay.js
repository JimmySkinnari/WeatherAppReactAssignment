import React from 'react'
import LongForecast from './LongForecast'
import TodayForecast from './TodayForecast'

const WeatherDisplay = ({isLoading, results, longResult}) => {
    return isLoading ? (<h1>Loading</h1>
    ) : (
        <div>
        <TodayForecast todayResult ={results} />
        <LongForecast longResult ={longResult} />
        </div>
    )



}
export default WeatherDisplay
