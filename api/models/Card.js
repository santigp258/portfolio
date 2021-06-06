const { model, Schema } = require('mongoose');

const cardSchema = Schema(
  {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    icon: String,
    category: [{ title: String }]
  },
  { timestamps: true }
);

module.exports = model('card', cardSchema);
