const express = require("express");
const router = express.Router();
const axios = require('axios');

const { sleep } = require('../utils');

router.get('/', async (req, res) => {

  try {
      const response = await axios.get(
        "http://www.recipepuppy.com/api/?q=omelet"
      );
      return res.send(response.data);
    } catch (err) {
      return err;
    }

});

module.exports = router;
