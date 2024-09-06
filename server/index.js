const exprees = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
dotenv.config();

const app = exprees();
PORT = process.env.PORT || 2000;

mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("DB CONNCETED");
  })
  .catch((error) => {
    console.log("DB NOT CONNCETED");
  });

app.use(cros());
app.use(exprees.json());
app.use("/auth", authRoute);
app.use("/home", (req, res) => {
  res.send("hi");
});

app.listen(PORT, console.log(`port running on${PORT}`));