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
  SpouseName: string;
  // SpouseOccupation:string,
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
    Qualification: {
      type: String,
      required: [true, "Qualification is Required"],
    },
    Occupation: {
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
    Age: {
      type: String,
      required: [true, "Age is Required"],
    },
    DOB: {
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
  },
  { timestamps: true }
);

const MemberModel =
  (mongoose.models.Member as mongoose.Model<Member>) ||
  mongoose.model<Member>("Member", MemberSchema);

export default MemberModel;
