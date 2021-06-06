const { response } = require('express');
const nodemailer = require('nodemailer');

const { mailTemplate } = require('../helpers/mailTemplate');
const { mailTemplateSendMe } = require('../helpers/mailTemplateSendMe');

const Mail = require('../models/mail');

const createEmail = async (req, res = response) => {
  const { email, msg, name } = req.body;
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // send mail to user contact me
    let info = await transporter.sendMail({
      from: process.env.MINE_EMAIL, // sender address
      to: email, // list of receivers
      subject: 'Santiago-Portafolio', // Subject line
      text: '¡Gracias por tu mensaje!', // plain text body
      html: mailTemplate(name) // html body
    });

    //send mail to me when someone contactme
    let infoSendMe = await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to: process.env.MINE_EMAIL, // list of receivers
      subject: 'Respuesta. Santiago-Portafolio', // Subject line
      text: '¡Gracias por tu mensaje!', // plain text body
      html: mailTemplateSendMe(name, email, msg) // html body
    });

    console.log('Message sent: %s', info);
    // Preview only available when sending through an gmaail account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    const newContact = {
      ...req.body,
      email_id: info.messageId
    };

    const mail = new Mail(newContact);

    //save user info contactme
    const saved = await mail.save();
    res.status(200).json({
      ok: true,
      msg: 'Gracias por visitarme. ¡Un saludo!',
      info: nodemailer.getTestMessageUrl(info),
      id: info.messageId,
      emailSaved: saved
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false
    });
  }
};

module.exports = {
  createEmail
};
