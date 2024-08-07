import dbConnect from "@/lib/dbConnect";
import SHGModel from "@/models/SHG.model";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export interface Group {
  _id: string;
  Name: string;
  RP: string;
  Members?: string[];
  createdAt: string;
  updatedAt: string;
}

export async function GET(request:NextRequest) {
  await dbConnect();
  // const path = request.nextUrl.searchParams.get('path')

  // if (path) {
  //   revalidatePath(path)
  //   return Response.json({ revalidated: true, now: Date.now() })
  // }
  const SHGList: Group[] = await SHGModel.find({});
//   console.log(SHGList);

  return  Response.json(
    {
      success: true,
      message: "New SHG",
      SHGList
    },
    { status: 200 }
  );
}
