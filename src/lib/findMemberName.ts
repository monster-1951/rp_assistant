import SHGModel from "@/models/SHG.model";
import dbConnect from "./dbConnect";
import MemberModel from "@/models/Member.model";

export const findMemberName = async (id: string) => {
  await dbConnect();

  try {
    const member = await MemberModel.findOne({ _id: id });
    return member?.FirstName
  } catch (error) {
    console.log(error, "Cant find Member");
  }
};
