const { response } = require('express');
const Card = require('../models/Card');

//get
const getCards = async (req, res = response) => {
  try {
    const events = await Card.find();
    res.json({ ok: true, events });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Comunicate with administrator', error });
  }
};

const createCard = async (req, res = response) => {
  const card = new Card(req.body);

  try {
    const eventSave = await card.save();
    res.json({
      ok: true,
      event: eventSave
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Comunicate with administrator', error });
  }
};

module.exports = {
  getCards,
  createCard
};
