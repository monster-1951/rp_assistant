import axios from "axios";
import dbConnect from "./dbConnect";
import { Group } from "@/app/api/(SHGs)/FetchSHGs/route";
import SHGModel from "@/models/SHG.model";

export const fetchData = async ()=> {
 await dbConnect();
 const SHGList: Group[] = await SHGModel.find({});
 return SHGList;
};
