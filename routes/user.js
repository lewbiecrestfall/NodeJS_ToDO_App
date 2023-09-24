import express from "express";
import { deleteUser, getAllUser, getNewUser, getUserDetails, specialFunc, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUser);

router.post("/new", getNewUser);

router.get("/userid/special", specialFunc)

router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser)

 

export default router;