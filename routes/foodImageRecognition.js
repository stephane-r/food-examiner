var express = require('express');
var router = express.Router();
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: process.env.CLARIFAI_API_KEY || 'CLARIFAI_API_KEY'
});

router.post('/', (req, res) => {
  
  app.models.predict("bd367be194cf45149e75f01d59f77ba7", req.body.imageLink).then(
    function(response) {
      res.json(response);
    },
    function(err) {
      res.status(400).json({ err: err });
    }
  );

});

router.get('/env', (req, res) => {
  res.json({ test: 'test' })
  // res.json({ env: process.env.CLARIFAI_API_KEY });
})

module.exports = router;
