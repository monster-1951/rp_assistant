import axios from "axios";
import dbConnect from "./dbConnect";
import { Group } from "@/app/api/(SHGs)/FetchSHGs/route";
import SHGModel from "@/models/SHG.model";
import { revalidatePath } from "next/cache";

export const fetchData = async () => {
  let data :Group[] = [];
  try {
    const SHGList = await axios.get("/api/FetchSHGs",{
      headers:{
        'Cache-Control': 'no-store'
      }
    }).then((res) => {
      data = res.data.SHGList
    }
    );
    // revalidatePath('/')
    return data
  } catch (error) {
    console.log(error);
  }
  //  finally {
  //   revalidatePath('/api/FetchSHGs')
  // }
};
