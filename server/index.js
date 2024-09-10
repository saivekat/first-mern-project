const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const ParcelRoute = require("./routes/parcel");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((error) => {
    console.log("DB NOT CONNECTED", error);
  });

//app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/parcels", ParcelRoute);

app.use("/home", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
