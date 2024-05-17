import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const {student:studentData} = req.body
    const result = await StudentServices.createStudentToDb(studentData)
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getAllStudent = async (req: Request, res: Response) => {
  try {
   // const {student:studentData} = req.body
    const result = await StudentServices.getAllStudentFromDb()
    res.status(200).json({
      success: true,
      message: 'all students find successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = await StudentServices.getSingleStudentFromDb(studentId)
    res.status(200).json({
      success: true,
      message: 'student found successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const studentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
}