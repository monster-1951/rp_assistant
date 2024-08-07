'use server'
import dbConnect from "@/lib/dbConnect";
import SHGModel from "@/models/SHG.model";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";


const fetchData = async () => {
    try {
      const response = await axios.get("/api/FetchSHGs");
      console.log(response.data.SHGList);
      
    } catch (error) {
      console.log(Error, "🥲");
    }
  };

