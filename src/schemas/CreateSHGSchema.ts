"use client"
import { z } from "zod";

export const CreateSHGSchema = z.object({
    Name:z.string().min(3,"Enter a valid name for group"),
    NoOfMembers:z.string({required_error:"Enter the number of members in this group"}),
    RP:z.string({required_error:"Enter the Name of the RP"}),
    NameOfSLF:z.string()
})