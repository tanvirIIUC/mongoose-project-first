import { Schema, model, connect } from 'mongoose'
import { Guardian, Student, Student, UserName } from './student.interface'


const userNameSchema = new Schema<UserName>({
  fatherName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContactNo: { type: String, required: true },
})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  guardianNo: { type: String, required: true },
  gender: ['male', 'female'],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  bloodGroup: ['+A', '+B', '+AB', '+O', '-A', '-B', '-AB', '-O'],
  guardian:guardianSchema,
  isActive: ['active', 'blocked'],
})


export const StudentModel = model<Student>('student', studentSchema);
