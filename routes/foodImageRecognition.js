const express = require("express");
const router = express.Router();
const Clarifai = require("clarifai");

const checkGoogleRecaptcha = require("../middlewares/checkGoogleRecaptcha");

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY || "CLARIFAI_API_KEY"
});

router.post("/", checkGoogleRecaptcha, async (req, res) => {
  app.models
    .predict("bd367be194cf45149e75f01d59f77ba7", req.body.imageLink)
    .then(
      function(response) {
        res.json(response);
      },
      function(error) {
        console.log("Error status code: " + error.data["status"]["code"]);
        console.log(
          "Error description: " + error.data["status"]["description"]
        );
        if (error.data["status"]["details"]) {
          console.log("Error details: " + error.data["status"]["details"]);
        }
        console.log(error.data);
        return res.status(error.status).json(error.data);
      }
    );
});

module.exports = router;
