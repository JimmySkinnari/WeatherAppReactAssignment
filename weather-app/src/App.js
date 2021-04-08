import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import WeatherList from "./components/weather/WeatherList"
import axios from 'axios';

const App = () => {

  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState([]);
  const [longResults, setLongResults] = useState([]);
  const [getWeather, setGetWeather] = useState("Stockholm");
  const [showLongForecast, setShowLongForecast] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const search = (searchVal) =>{
    setGetWeather(searchVal)
  }

  useEffect(() => {
    
    const fetchWeather = async () => {
      const result = await axios
        (
        `http://api.openweathermap.org/data/2.5/weather?q=${getWeather}&units=metric&appid=539ef42e6ef65b779c987dc2f30ba004`
        )
        const longResult = await axios
        (
        `http://api.openweathermap.org/data/2.5/forecast?q=${getWeather}&ctn=2&units=metric&appid=539ef42e6ef65b779c987dc2f30ba004`
        )
      setLongResults(longResult.data);
      setResults(result.data);
      setIsLoading(false);
    }

  fetchWeather();

  }, [getWeather])

  return (
    <div className="container">
    <Header />
    <Search search={search} inputText={inputText} setInputText={setInputText} setGetWeather={setGetWeather} />

    <WeatherList isLoading={isLoading}
                 results={results} 
                 longResult ={longResults} 
                 showLongForecast={showLongForecast}
                 onShowLongForecast={() => setShowLongForecast(!showLongForecast)}  />
    <Footer />
    </div>
  );
}

export default App;
