import axios from "axios";
import dbConnect from "./dbConnect";
import { Group } from "@/app/api/(SHGs)/FetchSHGs/route";
import SHGModel from "@/models/SHG.model";

export const fetchData = async () => {
  let data :Group[] = [];
  try {
    const SHGList = await axios.get("/api/FetchSHGs").then((res) => {
      data = res.data.SHGList
    }
    );
    return data
  } catch (error) {
    console.log(error);
  }
};
