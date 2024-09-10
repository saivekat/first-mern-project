const user = require("../model/user");

 const deleteUser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json("The user has been delete success");
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await user.find.sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports={deleteUser,getAllUser};
