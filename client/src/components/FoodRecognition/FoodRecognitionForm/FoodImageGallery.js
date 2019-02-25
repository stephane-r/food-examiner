import React, { Component } from "react";
import axios from "axios";

import "./index.css";
import FoodImage from "./FoodImage";

export default class FoodImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:3001/api/images/");
      const items = response.data.results.map(r => {
        return r.urls.small;
      });
      this.setState({ items });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    return <div className="image-gallery">{this._renderItems(this.state.items)}</div>;
  }

  _renderItems = items => {
    return items.map(i => {
      return <FoodImage item={i} />;
    });
  };
}
