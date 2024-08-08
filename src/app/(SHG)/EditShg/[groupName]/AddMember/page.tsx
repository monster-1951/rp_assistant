"use client";
import { AddMemberSchema } from "@/schemas/AddMemberSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  castes,
  femaleOccupations,
  maleOccupations,
  SpouseAlive,
} from "@/constants/constants";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Selectt from "@/components/custom/Selectt";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { Textarea } from "@/components/ui/textarea";
import { useMemo, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { revalidatePath } from "next/cache";

const AddMember = ({ params }: { params: { groupName: string } }) => {
  const { toast } = useToast();
  const [alive, setalive] = useState(true);


  const aliveRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof AddMemberSchema>>({
    resolver: zodResolver(AddMemberSchema),
    defaultValues: {
      memberFirstName: "",
      memberLastName: "",
      memberMobileNumber: "",
      memberQualification: "",
      memberOccupation: "",
      aadhaarNumber: "",
      memberAge: "",
      memberDob: "",
      caste: "",
      address: "",
      memberHusbandFirstName: "",
      spouseAlive: aliveRef.current?.value ? true : false,
      groupName: params.groupName,
      // memberHusbandaadhaarNumber:"",
      // memberHusbandAge:"",
      // memberHusbandDob:"",
      // memberHusbandLastName:"",
      // memberHusbandMobileNumber:"",
      // memberHusbandOccupation:"",
      // memberHusbandQualification:"",
    },
  });

  const onSubmit = async (values: z.infer<typeof AddMemberSchema>) => {
    console.log(values);
    try {
      const response = await axios.post("/api/AddMember", values);
      console.log("👍", values, "This is the data from onSubmit function");

      toast({
        title: "Member added 👍",
        description: "You can go back to home",
        action: <ToastAction altText="Home">Home</ToastAction>,
      });
      // revalidatePath("/")
    } catch (error) {
      console.error("Error while create adding the member", error);
      const axiosError = error as AxiosError<ApiResponse>;

      // Default error message
      let errorMessage = axiosError.response?.data.message;
      ("There was a problem with adding a member. Please try again.");

      toast({
        variant: "destructive",
        title: "Member not added 👎",
        description: "You can go back to home",
        action: <ToastAction altText="Home">Home</ToastAction>,
      });
      // revalidatePath("/")
    } 
    finally {
      revalidatePath("/api/FetchSHGs")
    }
  };

  return (
    <div className="w-fit mx-auto border border-black p-5 my-10">
      <div className="p-3 text-center font-bold rounded-xl underline underline-offset-2">
        {decodeURIComponent(params.groupName)}
      </div>
      <Form {...form}>
        {/* GroupName */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* MemberFirstName */}

          <FormField
            control={form.control}
            name="memberFirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Member's Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* MemberLastName */}

          <FormField
            control={form.control}
            name="memberLastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Member's Last Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Is Spouse alive */}
          <FormField
            control={form.control}
            name="spouseAlive"
            render={({ field }) => (
              <FormItem className="flex justify-between py-3">
                <FormControl className="flex ">
                  <>
                    <FormLabel className="px-2 my-auto">
                      Spouse Alive?
                    </FormLabel>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SpouseName */}

          <FormField
            control={form.control}
            name="memberHusbandFirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Spouse Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Spouse Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* MobileNumber */}

          <FormField
            control={form.control}
            name="memberMobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="Mobile Number" {...field} type="number" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Spouse MobileNumber */}
          <FormField
            control={form.control}
            name="memberHusbandMobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Spouse Mobile Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Spouse Name"
                    {...field}
                    type="number"
                    disabled={alive ? false : true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Qualification */}

          <FormField
            control={form.control}
            name="memberQualification"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Qualification</FormLabel>
                <FormControl>
                  <Input placeholder="Qualification" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/*Spouse Qualification */}

          <FormField
            control={form.control}
            name="memberHusbandQualification"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Spouse Qualification</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Qualification"
                    {...field}
                    disabled={alive ? false : true}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Occupation */}

          <FormField
            control={form.control}
            name="memberOccupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Occupation</FormLabel>
                <FormControl>
                  <Selectt
                    value={field.value}
                    onChange={field.onChange}
                    options={femaleOccupations}
                    placeHolder="Select"
                    disabled={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Spouse Occupation */}

          <FormField
            control={form.control}
            name="memberHusbandOccupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Spouse Occupation</FormLabel>
                <FormControl>
                  <Selectt
                    value={field.value}
                    onChange={field.onChange}
                    options={maleOccupations}
                    placeHolder="Select"
                    disabled={alive ? false : true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Aadhar number */}
          <FormField
            control={form.control}
            name="aadhaarNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Aadhar Number</FormLabel>
                <FormControl>
                  <Input placeholder="Aadhar Number" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*Spouse Aadhar number */}

          <FormField
            control={form.control}
            name="memberHusbandaadhaarNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Spouse Aadhar Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Aadhar Number"
                    type="number"
                    {...field}
                    disabled={alive ? false : true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Age */}

          <FormField
            control={form.control}
            name="memberAge"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Age</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the Age" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Spouse age */}

          <FormField
            control={form.control}
            name="memberHusbandAge"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Spouse Age</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the Age"
                    type="number"
                    {...field}
                    disabled={alive ? false : true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Dob */}
          <FormField
            control={form.control}
            name="memberDob"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Date of Birth</FormLabel>
                <FormControl>
                  <Input placeholder="Date of Birth" type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*Spouse  Dob */}
          <FormField
            control={form.control}
            name="memberHusbandDob"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Spouse Date of Birth</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Date of Birth"
                    type="date"
                    {...field}
                    disabled={alive ? false : true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Caste */}
          <FormField
            control={form.control}
            name="caste"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Caste</FormLabel>
                <FormControl>
                  <Selectt
                    value={field.value}
                    onChange={field.onChange}
                    options={castes}
                    placeHolder="Select"
                    disabled={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="px-2">Address</FormLabel>
                <FormControl>
                  <div className="h-32">
                    <Textarea placeholder="" {...field} className="h-32" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            onClick={() => {
              console.log("clicked");
            }}
            className="flex border border-black w-full align-middle"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddMember;
