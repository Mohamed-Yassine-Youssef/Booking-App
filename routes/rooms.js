import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { protect, admin } from "../utils/verifyToken.js";
const router = express.Router();
//CREATE
router.post("/:hotelid", protect, admin, createRoom);

//UPDATE
router.put("/availability/:id", protect, updateRoomAvailability);
router.put("/:id", protect, admin, updateRoom);
//DELETE
router.delete("/:id", protect, admin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;
