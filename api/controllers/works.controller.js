const { response } = require('express');
const Work = require('../models/Work');

//get
const getWorks = async (req, res = response) => {
  try {
    const events = await Work.find();
    res.json({ ok: true, events });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'Comunicate with administrator', error });
  }
};

const createWork = async (req, res = response) => {
  const card = new Work(req.body);

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
  getWorks,
  createWork
};
