const Event = require("../models/Event");

const customValidate = async (req, res, next) => {
  const eventId = req.params.id;
  const { uid } = req;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event no exists",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "User not authorized to modify this event",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: "Comunicate with administrator", error });
  }
};

module.exports = {
  customValidate,
};
