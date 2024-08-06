"use client";

import { CreateSHGSchema } from "@/schemas/CreateSHGSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
const CreateGroup = () => {
  const form = useForm<z.infer<typeof CreateSHGSchema>>({
    resolver: zodResolver(CreateSHGSchema),
    defaultValues: {
      Name: "",
      NoOfMembers: "",
      RP: "",
    },
  });
  async function onSubmit(values: z.infer<typeof CreateSHGSchema>) {
    try {
      const response = await axios.post("/api/AddNewSHG",values)
      console.log("👍", values, "This is the data from onSubmit function");
    } catch (error) {
      console.error("Error while create the group", error);
      const axiosError = error as AxiosError<ApiResponse>;

      // Default error message
      let errorMessage = axiosError.response?.data.message;
      ("There was a problem with creating a group. Please try again.");
    }

    console.log(values);
  }
  return (
  <div className="w-fit mx-auto border border-black p-5 my-10">
  <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" >
        {/* Group Name */}
        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the Group</FormLabel>
              <FormControl>
                <Input placeholder="Enter Group Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         {/* SLF Name */}
         <FormField
          control={form.control}
          name="NameOfSLF"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of SLF</FormLabel>
              <FormControl>
                <Input placeholder="Enter SLF Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* No of Members */}
        <FormField
          control={form.control}
          name="NoOfMembers"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of members</FormLabel>
              <FormControl>
                <Input placeholder="How many members ?" {...field} type="number"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* RP Name */}
        <FormField
          control={form.control}
          name="RP"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of RP</FormLabel>
              <FormControl>
                <Input placeholder="Enter RP Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    );
};

export default CreateGroup;
