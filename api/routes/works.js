/* 
works routes

host + api/works
*/

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { getWorks, createWork } = require("../controllers/works.controller");

const fielValidator = require("../middlewares/field-validator");

//create event
router.get("/", getWorks);
router.post("/", [
    check("title", "Title is required").not().isEmpty(),
    check("desc", "desc is required").not().isEmpty(),
    check("repo", "repo is required").not().isEmpty(),
    check("categories", "categories is required").not().isEmpty(),
    check("images", "images is required").not().isEmpty(),
    fielValidator,
], createWork);

module.exports = router;
