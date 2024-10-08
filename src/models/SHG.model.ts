import mongoose, { Schema, Document } from "mongoose";

export interface SHG extends Document {
  Name: string;
  NoOfMembers: string;
  RP: string;
  Members: object[];
  NameOfSLF: string;
}

const SHGSchema = new Schema<SHG>(
  {
    Name: {
      type: String,
      required: [true, "Name of SHG is required"],
    },
    NoOfMembers: {
      type: String,
      required: [true, "Name of SHG is required"],
    },
    RP: {
      type: String,
      required: [true, "Who created this group?"],
    },
    Members: [
      {
        _id: { type: Schema.Types.ObjectId, ref: "Member" },
        name:String
      },
    ],
    NameOfSLF: {
      type: String,
      required: [true, "Name the SLF"],
    },
  },
  {
    timestamps: true,
  }
);

const SHGModel =
  (mongoose.models.SHG as mongoose.Model<SHG>) ||
  mongoose.model<SHG>("SHG", SHGSchema);

export default SHGModel;
