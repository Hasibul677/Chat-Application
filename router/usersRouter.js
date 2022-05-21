// external imports
const express = require("express");

// internal imports
const { getusers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("User"), getusers);

module.exports = router;
