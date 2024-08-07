import SHGModel from "@/models/SHG.model";
import dbConnect from "./dbConnect";

export const findSHGname = async (id: string) => {
  await dbConnect();

  const shgName = await SHGModel.findOne({ _id: id });
  console.log(shgName?.Name);
  return shgName?.Name;
};
