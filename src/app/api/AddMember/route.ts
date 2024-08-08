'use server'
import dbConnect from "@/lib/dbConnect";
import MemberModel from "@/models/Member.model";
import SHGModel from "@/models/SHG.model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  await dbConnect();
  //   console.log("🍻", request);

  try {
    const {
      groupName,
      memberFirstName,
      aadhaarNumber,
      address,
      caste,
      memberAge,
      memberDob,
      memberHusbandFirstName,
      memberLastName,
      memberMobileNumber,
      spouseAlive,
      memberOccupation,
      memberQualification,
      memberHusbandMobileNumber,
      memberHusbandOccupation,
      memberHusbandQualification,
      memberHusbandaadhaarNumber,
      memberHusbandAge,
      memberHusbandDob,
      memberAccount,
      memberBankIFSCcode,
      noOfFamilyMembers,
    } = await request.json();

    console.log(
      {
        groupName:decodeURIComponent(groupName),
        memberFirstName,
        aadhaarNumber,
        address,
        caste,
        spouseAlive,
        memberAge,
        memberDob,
        memberHusbandFirstName,
        memberLastName,
        memberMobileNumber,
        memberOccupation,
        memberQualification,
        memberHusbandMobileNumber,
        memberHusbandOccupation,
        memberHusbandQualification,
        memberHusbandaadhaarNumber,
        memberHusbandAge,
        memberHusbandDob,
        memberAccount,
        memberBankIFSCcode,
        noOfFamilyMembers,
      },
      "🙌"
    );

    const newMember = new MemberModel({
      spouseAlive:spouseAlive,
      GroupName: decodeURIComponent(groupName),
      FirstName: memberFirstName,
      LastName: memberLastName,
      MobileNumber: memberMobileNumber,
      SpouseMobileNumber:spouseAlive ? memberHusbandMobileNumber : "NA",
      Qualification: memberQualification,
      SpouseQualification:spouseAlive ?memberHusbandQualification : "NA",
      Occupation: memberOccupation,
      SpouseOccupation:spouseAlive ?memberHusbandOccupation : "NA",
      SpouseName:spouseAlive ? memberHusbandFirstName : "NA",
      AadharNumber: aadhaarNumber,
      SpouseAadharNumber:spouseAlive ?memberHusbandaadhaarNumber : "NA",
      Age: memberAge,
      SpouseAge:spouseAlive ?memberHusbandAge : "NA",
      DOB: memberDob,
      SpouseDOB:spouseAlive ?memberHusbandDob :"NA",
      Caste: caste,
      Address: address,
    });

    await newMember.save();

    console.log(newMember, "👍");

    const group =await SHGModel.updateOne(
      {Name:groupName},
      {$push:{Members:{_id:newMember._id,name:newMember.FirstName}}}
    )
    console.log(group);
    revalidatePath('/api/FetchSHGs')
    return Response.json(
      {
        success: true,
        message: "Posted",
        newMember,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding member:", error);
    return Response.json(
      {
        success: false,
        message: "Error adding a member",
      },
      { status: 500 }
    );
  }
}
