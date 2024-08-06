"use client";

import { z } from "zod";

const NameSchema = z.string().min(3,"Name must be atleast 3 characters");
const MobileNumberSchema = z.string().length(10,"Mobile Number should have 10 digits").regex(/^\+?[1-9]\d{1,14}$/, {
  message: "Invalid mobile number",
}
)
const AadharSchema = z.string().length(12);
const AgeSchema = z.string()
const dobSchema = z.string();

export const AddMemberSchema = z.object({
  memberFirstName: NameSchema,
  memberLastName: NameSchema,
  memberMobileNumber: MobileNumberSchema,
  memberQualification: z.string(),
  memberOccupation: z.string(),
  aadhaarNumber: AadharSchema,
  memberAge: AgeSchema,
  memberDob: dobSchema,
  caste: z.string(),
  address: z.string(),
  memberHusbandFirstName: NameSchema,
  memberHusbandLastName: NameSchema.optional(),
  memberHusbandMobileNumber: MobileNumberSchema.optional(),
  memberHusbandQualification: z.string().optional(),
  memberHusbandOccupation: z.string().optional(),
  memberHusbandaadhaarNumber: AadharSchema.optional(),
  memberHusbandAge: AgeSchema.optional(),
  memberHusbandDob: dobSchema.optional(),
  memberAccount: z.number().optional(),
  memberBankIFSCcode: z.string().optional(),
  noOfFamilyMembers: z.number().gte(1).optional(),
});
