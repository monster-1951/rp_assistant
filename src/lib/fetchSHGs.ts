
import axios, { AxiosError } from "axios";


export const fetchData = async () => {
    try {
      const response = await axios.get("/api/FetchSHGs");
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      console.log(Error, "🥲");
    }
  };