import React, { Component } from "react";

export default class FoodRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      predictions: [
        {
          name: "Sauce",
          value: 0.9
        },
        {
          name: "Pizza",
          value: 0.85
        },
        {
          name: "Toast",
          value: 0.7
        },
        {
          name: "Tomato",
          value: 0.6
        },
        {
          name: "Noodles",
          value: 0.5
        }
      ]
    };
  }

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <form
          className="d-flex justify-content-between"
          onSubmit={this._onFormSubmit}
        >
          <input
            type="text"
            style={{ flexBasis: "80%" }}
            className="form-control"
            placeholder="Provide a direct link to a file on the web"
          />
          <button
            className="btn btn-secondary"
            type="submit"
            style={{ flexBasis: "19%" }}
          >
            Submit
          </button>
        </form>
        <div className="d-flex rounded border border-success" style={{ marginTop: "20px" }}>
          <div className="d-flex justify-content-center bg-success" style={{ minWidth: '60%', alignItems: 'center' }}>
            <img
              src="https://images.unsplash.com/photo-1528669826296-dbd6f641707d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
              alt="image-placeholder"
              style={{ width: '80%', height: '80%' }}
            />
          </div>
          <ul
            className="list-group list-group-flush"
            style={{ minWidth: '40%' }}
          >
            <li className="list-group-item d-flex justify-content-between">
              <span>Prediction</span>
              <span>Probability</span>
            </li>
            {this._renderPredictions()}
          </ul>
        </div>
      </div>
    );
  }

  _onFormSubmit = async () => {
    // try {
    //   const response = await fetch(
    //     "http://localhost:3001/foodImageRecognition/"
    //   );
    //   if (!response) {
    //     return;
    //   }
    //   const data = response.json();
    // } catch (err) {
    //   console.log(err);
    //   alert(err);
    // }
  };

  _renderPredictions = () => {
    return this.state.predictions.map((p, i) => {
      return (
        <li
          key={i}
          className={`list-group-item d-flex justify-content-between ${this._determineTextColor(
            p.value
          )}`}
        >
          <span>{p.name}</span>
          <span>{p.value}</span>
        </li>
      );
    });
  };

  _determineTextColor = value => {
    if (value > 0.8) {
      return "text-success";
    }
    if (value > 0.6) {
      return "text-warning";
    }
    return "text-muted";
  };
}
