import dbConnect from "@/lib/dbConnect";
import MemberModel from "@/models/Member.model";

export async function POST(request: Request) {
  await dbConnect();
//   console.log("🍻", request);

  try {
    const {
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

    console.log( {
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
      } ,"🙌");
    

    const newMember = new MemberModel({
      FirstName: memberFirstName,
      LastName: memberLastName,
      MobileNumber: memberMobileNumber,
      Qualification: memberQualification,
      Occupation:memberOccupation,
      SpouseName:memberHusbandFirstName,
      AadharNumber:aadhaarNumber,
      Age:memberAge,
      DOB:memberDob,
      Caste:caste,
      Address:address,
    });

    await newMember.save();

    console.log(newMember,"👍");
    

    return Response.json(
      {
        success: true,
        message: "Posted",
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
