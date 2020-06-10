const express = require("express");
const router = express.Router();

//Importing models
const URL = require("../models/url");

/*
    @route:     GET /re/:code
    @desc:     To redirect to original url
*/
router.get("/:code", async (req, res) => {
  try {
    const url = await URL.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;
