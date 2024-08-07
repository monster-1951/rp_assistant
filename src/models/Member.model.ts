import mongoose, { Document, Schema } from "mongoose";

export interface Member extends Document {
  FirstName: string;
  LastName: string;
  MobileNumber: string;
  Qualification: string;
  Occupation: string;
  AadharNumber: string;
  Age: string;
  DOB: string;
  Caste:
    | "SC"
    | "ST"
    | "BC-A"
    | "BC-B"
    | "BC-C"
    | "BC-D"
    | "OBC"
    | "EBC"
    | "GENERAL";
  Address: string;
  spouseAlive:boolean
  SpouseName: string;
  GroupName:string;
  SpouseOccupation:string,
  SpouseMobileNumber:string,
  SpouseQualification:string,
  SpouseAadharNumber:string,
  SpouseAge:String,
  SpouseDOB:string,
}

const MemberSchema: Schema = new Schema<Member>(
  {
    FirstName: {
      type: String,
      required: [true, "First Name is Required"],
    },
    LastName: {
      type: String,
      required: [true, "Last Name is Required"],
    },

    MobileNumber: {
      type: String,
      required: [true, "Mobile is Required"],
    },
    spouseAlive:{
      type:Boolean,
      required:[true,"Is Spouse alive or not?"]
    },
    SpouseMobileNumber:{
      type: String,
      required: [true, "Mobile is Required"],
    },
    Qualification: {
      type: String,
      required: [true, "Qualification is Required"],
    },
    SpouseQualification: {
      type: String,
      required: [true, "Qualification is Required"],
    },
    Occupation: {
      type: String,
      required: [true, "Qualification is Required"],
    },
    SpouseOccupation: {
      type: String,
      required: [true, "Qualification is Required"],
    },
    SpouseName: {
      type: String,
      required: [true, "First Name is Required"],
    },
    AadharNumber: {
      type: String,
      required: [true, "Aadhar is Required"],
    },
    SpouseAadharNumber: {
      type: String,
      required: [true, "Aadhar is Required"],
    },
    Age: {
      type: String,
      required: [true, "Age is Required"],
    },
    SpouseAge: {
      type: String,
      required: [true, "Age is Required"],
    },
    DOB: {
      type: String,
      required: [true, "Date of Birth is Required"],
    },
    SpouseDOB: {
      type: String,
      required: [true, "Date of Birth is Required"],
    },
    Caste: {
      type: String,
      required: [true, "Caste is Required"],
    },
    Address: {
      type: String,
      required: [true, "Address is Required"],
    },
    GroupName: {
      type: String,
      required: [true, "Group Name is Required"],
    },
    
  },
  { timestamps: true }
);

const MemberModel =
  (mongoose.models.Member as mongoose.Model<Member>) ||
  mongoose.model<Member>("Member", MemberSchema);

export default MemberModel;
