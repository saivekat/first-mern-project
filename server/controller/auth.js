const jwt = require("jsonwebtoken");
const cryptojs = require("crypto-js");
const user = require("../model/user");

const dotenv = require("dotenv");

dotenv.config();

const registerUser = async (req, res) => {
  const NewUser = new user({
    fullname: req.body.fullname,
    email: req.body.email,
    age: req.body.age,
    country: req.body.country,
    address: req.body.address,
    password: cryptojs.AES.encrypt(req.body.password, process.env.PASS).toString(),
  });

  try {
    const savedUser = await NewUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await user.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("You have not registered");
    }
    const hashedPassword = cryptojs.AES.decrypt(user.password, process.env.PASS);
    const originalPassword = hashedPassword.toString(cryptojs.enc.Utf8);
    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong password");
    }
    const { password, ...info } = user._doc;
    const accessToken = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SEC, { expiresIn: "10d" });
    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser };
