const express = require("express");
const router = express.Router();

const registerControl = require("../controllers/register");
const loginControl = require("../controllers/login");
const forgotPasswordControl = require("../controllers/forgotPass");
const resetPasswordControl = require("../controllers/resetPass");

const tokenValidatorFunc = require("../middleware/tokenValidator");

router.get("/", (req, res) => {
  res.send("reached user route");
});

router.post("/register", registerControl);

router.post("/login", loginControl);

router.post("/forgot-password", forgotPasswordControl);

router.post("/resetPassword", tokenValidatorFunc, resetPasswordControl);

module.exports = router;
