import dbConnect from "@/lib/dbConnect";
import MemberModel from "@/models/Member.model";

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
      memberOccupation,
      memberQualification,
    } = await request.json();

    console.log(
      {
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
        memberOccupation,
        memberQualification,
      },
      "🙌"
    );

    const newMember = new MemberModel({
      GroupName: groupName,
      FirstName: memberFirstName,
      LastName: memberLastName,
      MobileNumber: memberMobileNumber,
      Qualification: memberQualification,
      Occupation: memberOccupation,
      SpouseName: memberHusbandFirstName,
      AadharNumber: aadhaarNumber,
      Age: memberAge,
      DOB: memberDob,
      Caste: caste,
      Address: address,
    });

    await newMember.save();

    console.log(newMember, "👍");

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
