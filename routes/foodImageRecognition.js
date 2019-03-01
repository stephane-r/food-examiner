const express = require('express');
const router = express.Router();
const Clarifai = require('clarifai');

const checkGoogleRecaptcha = require('../middlewares/checkGoogleRecaptcha');

const app = new Clarifai.App({
 apiKey: process.env.CLARIFAI_API_KEY || 'CLARIFAI_API_KEY'
});

router.post('/',  checkGoogleRecaptcha, async (req, res) => {

  app.models.predict("bd367be194cf45149e75f01d59f77ba7", req.body.imageLink).then(
    function(response) {
      res.json(response);
    },
    function(err) {
      res.status(400).json({ err: err });
    }
  );

});

module.exports = router;
