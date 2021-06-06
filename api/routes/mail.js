/* 
mail routes

host + api/mail
*/

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {createEmail } = require("../controllers/email.controller");

const fielValidator = require("../middlewares/field-validator");

//create email
router.post("/", [
    check("email", "invalid email").isEmail(),
    check("msg", "message is required").not().isEmpty(),
    check("name", "name is required").not().isEmpty(),
    fielValidator,
], createEmail);

module.exports = router;
