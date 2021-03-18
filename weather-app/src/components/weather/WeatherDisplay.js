import React from 'react'

const WeatherDisplay = ({isLoading, results, longResult}) => {
    return isLoading ? (<h1>Loading</h1>
    ) : (
    
    <div className="weather">

    
      <h1>{longResult.city.name}</h1>

    </div>

        )


}
export default WeatherDisplay
