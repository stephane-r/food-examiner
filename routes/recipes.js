const express = require("express");
const router = express.Router();
const axios = require('axios');

const { sleep } = require('../utils');

router.get('/', async (req, res) => {
  const { keyword = 'cake', page = 1 } = req.query;
  try {
      const response = await axios.get(
        `http://www.recipepuppy.com/api/?q=${keyword}&p=${page}`
      );
      return res.send(response.data);
    } catch (err) {
      return res.send(err);
    }
});

module.exports = router;
