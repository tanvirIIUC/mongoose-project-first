import express  from "express";
import { studentController } from "./student.controller";


const router = express.Router();


router.post('/create-student',studentController.createStudent)
router.get('/get-students',studentController.getAllStudent)
router.get('/get-student/:studentId',studentController.getSingleStudent)

export const studentRoutes = router;