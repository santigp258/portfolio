const { model, Schema } = require("mongoose");

const mailSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        required: true,
    },
    email_id: String
}, { timestamps: true });


module.exports = model("mail", mailSchema);
