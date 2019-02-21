import React, { Component } from "react";
import FoodRecognition from "./components/FoodRecognition/index";
import Navbar from "./components/common/Navbar";

class App extends Component {
  render() {
    return (
      <div className="fluid-container">
        <Navbar />
        <div className="container">
          <FoodRecognition />
        </div>
      </div>
    );
  }

  componentDidMount() {}
}

export default App;
