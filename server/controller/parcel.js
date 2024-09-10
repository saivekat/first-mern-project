const Parcel = require("../model/Parcel");

const createParcel = async (req, res) => {
  try {
    const NewParcel = Parcel(req.body);
    const Parcel = await NewParcel.save();
    res.status(200).json(Parcel);
  } catch (error) {
    req.status(500).json(error);
  }
};

const getAllParcels = async(req, res) => {
  // Your logic to get all parcels
try {
  const Parcel = await Parcel.find().sort({ createAt: -1 });
  res.status(200).json(arcels);
} catch (error) {
  req.status(500).json(error);
}
  //res.send("All parcels retrieved");
};

const updateParcel = async (req, res) => {
  try {
    const Parcel = await Parcel.findById(req.params.id);
    res.status(200).json(Parcel);
  } catch (error) {
    req.status(500).json(error);
  }
};

const getOneParcel = async (req, res) => {
  try {
    const Parcel = await Parcel.findById(req.params.id);
    res.status(200).json(Parcel);
  } catch (error) {
    req.status(500).json(error);
  }
};
const getUserParcel = async (req, res) => {
  try {
    const Parcel = await Parcel
      .find({ sendremail: req.body.email })
      .sort({ createAt: -1 });
    res.status(200).json(Parcels);
  } catch (error) {
    req.status(500).json(error);
  }
};

const deleteParcel = async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);
    res.status(200).json("Parcel has been delete succussfully deleted");
  } catch (error) {
    req.status(500).json(error);
  }
};

module.exports = {
  createParcel,
  getAllParcels,   // Make sure this is defined earlier in the code
  updateParcel,
  getOneParcel,
  deleteParcel
};
