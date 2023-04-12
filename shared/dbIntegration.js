const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (e) {
    console.log(e.message, "error in connecting DB");
  }
};

module.exports = dbConnect;
