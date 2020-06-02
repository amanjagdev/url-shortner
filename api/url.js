const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");

//Importing models
const URL = require("../models/url");

/*
@desc:     To shorten the url
@route:     POST /api/url/shorten
*/
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }

  // Create url code
  const urlCode = shortid.generate();

  // Check long url
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await URL.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${baseUrl}/${urlCode}`;

        url = new URL({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();

        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid long url");
  }
});

/*
    @route:     GET /api/url/:code
    @desc:     To redirect to original url
*/
router.get("/:code", async (req, res) => {
  try {
    const url = await URL.findOne({ urlCode: req.params.code });

    if (url) {
      return res.send(url.longUrl);
    } else {
      return res.status(404).json("No url found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
