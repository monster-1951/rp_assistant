"use client";

import { z } from "zod";

const NameSchema = z.string().min(3,"Name must be atleast 3 characters");
const MobileNumberSchema = z.string().length(10,"Mobile Number should have 10 digits").regex(/^\+?[1-9]\d{1,14}$/, {
  message: "Invalid mobile number",
}
)
const AadharSchema = z.string().length(12,"Enter a valid Aadhar Number");
const AgeSchema = z.string().min(2,"Enter a Valid age");
const dobSchema = z.string().min(1,"Enter Date of Birth");

export const AddMemberSchema = z.object({
  memberFirstName: NameSchema,
  memberLastName: NameSchema,
  memberMobileNumber: MobileNumberSchema,
  memberQualification: z.string(),
  memberOccupation: z.string(),
  aadhaarNumber: AadharSchema,
  memberAge: AgeSchema,
  memberDob: dobSchema,
  caste: z.string().min(1,"Enter the caste"),
  address: z.string().min(1,"Enter the address"),
  memberHusbandFirstName: NameSchema,
  memberHusbandOccupation: z.string().optional(),
  memberHusbandLastName: NameSchema.optional(),
  memberHusbandMobileNumber: MobileNumberSchema.optional(),
  memberHusbandQualification: z.string().optional(),
  memberHusbandaadhaarNumber: AadharSchema.optional(),
  memberHusbandAge: AgeSchema.optional(),
  memberHusbandDob: dobSchema.optional(),
  memberAccount: z.number().optional(),
  memberBankIFSCcode: z.string().optional(),
  noOfFamilyMembers: z.number().gte(1).optional(),
});
