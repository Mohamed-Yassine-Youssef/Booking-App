import express from "express";

import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  addUser,
} from "../controllers/user.js";

const router = express.Router();
import { protect, admin } from "../utils/verifyToken.js";
router.post("/", protect, admin, addUser);
//UPDATE
router.put("/:id", protect, admin, updateUser);

//DELETE
router.delete("/:id", protect, admin, deleteUser);

//GET
router.get("/:id", protect, admin, getUser);

//GET ALL
router.get("/", protect, admin, getUsers);

export default router;
