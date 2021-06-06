/* 
cards routes

host + api/cards
*/

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getCards, createCard } = require('../controllers/cards.controller');
const fielValidator = require('../middlewares/field-validator');

//create event
router.get('/', getCards);
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('desc', 'desc is required').not().isEmpty(),
    check('icon', 'icon is required').not().isEmpty(),
    check('category', 'category is required').not().isEmpty(),
    fielValidator
  ],
  createCard
);

module.exports = router;
