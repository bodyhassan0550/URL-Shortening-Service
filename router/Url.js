const express = require("express");
const router = express.Router();
const UrlControl = require("../controller/Url");

router.post("/shorten", UrlControl.postAddUrl);
router.get("/shorten/:code", UrlControl.geturl);
router.get("/shorten/:code/stats", UrlControl.geturlstats);
router.put("/shorten/:code", UrlControl.updateUrl);

module.exports = router;
