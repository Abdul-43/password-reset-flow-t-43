const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const dbconnect = require("./shared/dbIntegration");
const userRouter = require("./routes/userRoute");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  //simple logger to find all accessed paths
  console.log("called " + req.url + " by " + req.ip);
  next();
});

app.use("/user", userRouter);

dbconnect()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server Running Successfully",process.env.PORT);
    });
  })
  .catch((e) => console.log(e));
