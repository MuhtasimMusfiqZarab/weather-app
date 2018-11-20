import React, { Component } from "react";

import Title from "./components/Title";
import InputForm from "./components/InputForm";
import Weather from "./components/Weather";

const API_KEY = "0ba5bddf480ccd34702a3d134534e8aa";

class App extends Component {
  fetchWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
  };

  state = {};
  render() {
    return (
      <div>
        <Title />
        <InputForm fetchWeather={this.fetchWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
