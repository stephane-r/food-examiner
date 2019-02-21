var express = require('express');
var router = express.Router();
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '5767a625cf1142ebb07676e4f99074a5'
});

router.get('/', function(req, res, next) {
  app.models.predict("bd367be194cf45149e75f01d59f77ba7", "https://samples.clarifai.com/food.jpg").then(
    function(response) {
      res.json(response);
    },
    function(err) {
      res.status(400).json({ err: err });
    }
  );
});

router.get('/env', (req, res) => {
  res.json({ env: process.env.CLARIFAI_API_KEY });
})

module.exports = router;
