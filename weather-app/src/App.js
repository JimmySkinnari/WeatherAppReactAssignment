import './App.css';
import React, { useState, useEffect } from "react";

import Header from "./components/ui/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import WeaterDisplay from "./components/weather/WeatherDisplay"
import axios from 'axios';

const App = () => {

  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState([]);
  const [longResults, setLongResults] = useState([]);
  const [getWeather, setGetWeather] = useState("Stockholm");
  
  const [isLoading, setIsLoading] = useState(true);


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

      console.log(result.data);
      console.log(longResult.data);

      setIsLoading(false);
    }

  fetchWeather();

  }, [])



  return (
    <div className="container">
    <Header />
    <Form inputText={inputText} setInputText={setInputText} setGetWeather={setGetWeather} />
    <WeaterDisplay isLoading={isLoading} results={results} longResult ={longResults} />
    <Footer />
    </div>
  );

}

export default App;

