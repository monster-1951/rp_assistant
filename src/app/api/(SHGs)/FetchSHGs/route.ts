import dbConnect from "@/lib/dbConnect";
import SHGModel from "@/models/SHG.model";

export interface Group {
  _id: string;
  Name: string;
  RP: string;
  Members?: string[];
  createdAt: string;
  updatedAt: string;
}

export async function GET() {
  await dbConnect();

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
