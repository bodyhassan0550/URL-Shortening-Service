const express = require("express");
const router = express.Router();
const UrlControl = require("../controller/Url");

router.post("/shorten", UrlControl.postAddUrl);
router.get("/shorten/:code", UrlControl.geturl);

module.exports = router;
