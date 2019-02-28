import React, { Component } from "react";
import { ToastContainer, Zoom } from "react-toastify";

import FoodRecognition from "./components/FoodRecognition/FoodRecognition";
import Navbar from "./components/common/Navbar";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faBook)

class App extends Component {
  render() {
    return (
      <div className="fluid-container" style={{ backgroundColor: '#FBF9FA'}}>
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
