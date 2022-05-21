// external imports
const express = require("express");

// internal imports
const { getinbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("Inbox"), getinbox);

module.exports = router;
