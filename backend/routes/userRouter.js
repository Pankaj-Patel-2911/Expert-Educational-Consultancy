import { getUserDetails,updateUser,getAllStudents } from "../controllers/userControllers.js";


import express from "express";

export const userRouter = express.Router();

// Define Routes
userRouter.get("/getUser", getUserDetails);
userRouter.put("/updateUser", updateUser);
userRouter.get("/getStudents",getAllStudents)