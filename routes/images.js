const express = require("express");
const router = express.Router();
const Unsplash = require("unsplash-js").default;
const { toJson } = require("unsplash-js");

const unsplash = new Unsplash({
  applicationId: process.env.UNSPLASH_ACCESS_KEY || "",
  secret: process.env.UNSPLASH_SECRET_KEY || ""
});

router.get("/", async (req, res) => {
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

module.exports = router;
