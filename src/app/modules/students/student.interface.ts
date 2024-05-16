import { Schema, model, connect } from 'mongoose';

export type guardian ={
    
    fatherName:string;
    fatherContactNo:string;
    motherName:string;
    motherContactNo:string;
}

export type student = {
  name:{
    firstName:string;
    middleNAme:string;
    lastName: string;
  }
  contactNo : string;
  guardianNo:string;
  gender: 'male'| 'female';
  dateOfBirth : string;
  email: string;
  presentAddress:string;
  permanentAddress:string;
  bloodGroup?: '+A' | '+B' | '+AB' | '+O'|'-A' | '-B' | '-AB' | '-O';
  guardian:guardian;
}