import React, { Component } from "react";
import { ToastContainer, Zoom } from "react-toastify";

import FoodRecognition from "./components/FoodRecognition/FoodRecognition";
import Navbar from "./components/common/Navbar";

class App extends Component {
  render() {
    return (
      <div className="fluid-container">
        <Navbar />
        <div className="container">
          <FoodRecognition />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          transition={Zoom}
          pauseOnVisibilityChange
        />
      </div>
    );
  }

  componentDidMount() {}
}

export default App;
