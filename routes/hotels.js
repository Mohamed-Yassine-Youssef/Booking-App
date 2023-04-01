import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { protect, admin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", protect, admin, createHotel);

//UPDATE
router.put("/:id", protect, admin, updateHotel);
//DELETE
router.delete("/:id", protect, admin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
