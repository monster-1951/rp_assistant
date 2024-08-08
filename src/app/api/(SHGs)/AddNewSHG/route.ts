'use server'
import dbConnect from "@/lib/dbConnect";
import SHGModel from "@/models/SHG.model";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  //   console.log(request.json());

  await dbConnect();
  try {
    const { Name, NoOfMembers, RP ,NameOfSLF} = await request.json();

    console.log({ Name, NoOfMembers, RP,NameOfSLF }, "🍻");

    const newGroup = new SHGModel({
        Name,NoOfMembers,RP,NameOfSLF
    });
    await newGroup.save()
    revalidatePath("/api/FetchSHGs")
    return Response.json(
      {
        success: true,
        message: "New SHG",
        newGroup
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error in creating new group", error);
    return Response.json(
      {
        success: false,
        message: "Error in creating new SHG",
      },
      { status: 500 }
    );
  }
}
