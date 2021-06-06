const { model, Schema } = require('mongoose');

const workSchema = Schema(
  {
    title: String,
    desc: String,
    repo: String,
    web: String,
    categories: [
      {
        title: String,
        link: Boolean,
        src: String
      }
    ],
    images: [
      {
        url: String,
        alt: String
      }
    ]
  },
  { timestamps: true }
);

module.exports = model('work', workSchema);
