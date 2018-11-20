import React, { Component } from "react";

class InputForm extends Component {
  state = {};
  render() {
    return (
      <form action="" onSubmit={this.props.fetchWeather}>
        <input type="text" name="city" placeholder="Enter City .." />
        <input type="text" name="country" placeholder="Enter Country .." />
        <button>Fetch Weather</button>
      </form>
    );
  }
}

export default InputForm;
