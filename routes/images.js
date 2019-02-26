const express = require("express");
const router = express.Router();
const axios = require('axios');
const Unsplash = require("unsplash-js").default;
const { toJson } = require("unsplash-js");

const unsplash = new Unsplash({
  applicationId: process.env.UNSPLASH_ACCESS_KEY || "",
  secret: process.env.UNSPLASH_SECRET_KEY || ""
});

// TODO, allow query
router.get("/random", (req, res) => {
  unsplash.photos
    .getRandomPhoto({ query: "food" })
    .then(toJson)
    .then(json => {
      return res.send(json);
    })
    .catch(err => {
      return res.status(400).send(err);
    });
});

// TODO, allow paging
// TODO, allow query
router.get('/', async (req, res) => {

  try {
    const response = await axios.get('https://api.unsplash.com/search/photos?client_id=85234471a9c3ddb5a045efe7ee56d3f28c916c86ab2a51a433b23a5054000b6d&query=food&orientation=landscape&per_page=16');
    
    return res.send(response.data);
  } catch (err) {
    return res.send(err);
  }

  unsplash.search.photos("food", 1)
  .then(toJson)
  .then(json => {
    return res.send(json);
  })
  .catch(err => {
    return res.status(400).send(err);
  })
});

module.exports = router;
