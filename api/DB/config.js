const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("DB CONNECTED");
  } catch (error) {
    console.log("DATABASE ERROR: ", error);
    throw new Error("DATABASE ERROR");
  }
};

module.exports = dbConnection;
