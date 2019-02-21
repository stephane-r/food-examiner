import React, { Component } from "react";

export default class FoodRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: "",
      predictions: null,
      imageLink: ""
    };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <form
          className="d-flex justify-content-between"
          onSubmit={this._onFormSubmit}
        >
          <input
            type="text"
            style={{ flexBasis: "80%" }}
            value={this.state.imageLink}
            className="form-control"
            placeholder="Provide a direct link to a file on the web"
            onChange={this._onImageLinkFieldUpdated}
          />
          <button
            className="btn btn-secondary"
            type="submit"
            style={{ flexBasis: "19%" }}
          >
            Submit
          </button>
        </form>
        <div
          className="d-flex rounded border border-success"
          style={{ marginTop: "20px", height: "600px" }}
        >
          <div
            className="bg-success text-center"
            style={{ minWidth: "60%", padding: "20px", margin: '0px auto' }}
          >
            {this._renderImage()}
          </div>
          <div
            style={{ minWidth: "40%", overflow: 'scroll' }}
          >
            <div className="d-flex justify-content-between border-bottom" style={{ padding: '0.75rem' }}>
              <div>Prediction</div>
              <div>Probability</div>
            </div>
            {this._renderPredictions()}
          </div>
        </div>
      </div>
    );
  }

  _renderImage = () => {
    if (this.state.imageSrc) {
      return (
        <img
          style={{ maxHeight: '100%', maxWidth: '100%'}}
          src={this.state.imageSrc}
          alt="image-placeholder"
        />
      );
    }
    return null;
  };

  _onImageLinkFieldUpdated = e => {
    this.setState({ imageLink: e.target.value });
  };

  _onFormSubmit = async e => {
    e.preventDefault();
    this.setState({
      imageSrc: this.state.imageLink
    });

    const url = "http://localhost:3001/foodImageRecognition/";
    try {
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ imageLink: this.state.imageLink })
      })
      const data = await response.json();
      const predictions = data.outputs[0].data.concepts;
      this.setState({ predictions });
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  _renderPredictions = () => {
    if (!this.state.predictions) {
      return <div />;
    }
    return this.state.predictions.map((p, i) => {
      return (
        <div
          style={{ padding: '0.75rem' }}
          key={i}
          className={`d-flex justify-content-between border-bottom ${this._determineTextColor(
            p.value
          )}`}
        >
          <div>{p.name}</div>
          <div>{parseFloat(p.value).toFixed(2)}</div>
        </div>
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
