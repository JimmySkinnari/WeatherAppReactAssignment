import './App.css';
import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);


  return (
    <div className="App">
    <Header />
    <Form inputText={inputText} setInputText={setInputText}  />
    <Footer />
    </div>
  );

}

