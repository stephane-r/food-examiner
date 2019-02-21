import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return <div>This is a React App</div>;
  }

  componentDidMount() {
    fetch("http://localhost:3001/foodImageRecognition/")
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => {
        alert(error);
        console.log(error);
      });
  }
}

export default App;
