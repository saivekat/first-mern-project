const exprees=require("express");
const router=exprees.Router();
const {createParcel,getAllParcels,updateParcel, getOneParcel, deleteParcel}=require("../controller/parcel");

router.post("/me",getAllParcels);

router.post('/',createParcel);

router.get('/',getAllParcels);

router.put("/:id",updateParcel);

router.get("/find/:id",getOneParcel)

router.delete("/:id",deleteParcel);

module.exports=router;

