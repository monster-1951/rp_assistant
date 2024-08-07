"use client";
import { Group } from "@/app/api/(SHGs)/FetchSHGs/route";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllSHGs = () => {
   const [SHGList, setSHGList] = useState<Group[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/FetchSHGs");
        setSHGList(response.data.SHGList)
        console.log(SHGList,"🍻")
        
      } catch (error) {
        console.log(Error, "🥲");
      }
    };
    fetchData()
  },[]);

  return (
    <div>
      {SHGList.map((group) => {
      return (
        <>
          <Card key={group._id}>
        <><CardHeader>
          <CardTitle>{group.Name}</CardTitle>
          <CardDescription>{group.Name} was created by {group.RP} .This group has {(group.Members)?.length} members</CardDescription>
        </CardHeader></>
        <CardContent>
          <p>Members in This group</p>
        </CardContent>
        <CardFooter>
          <p>Date of Creation</p>
          <Link href={`/EditShg/${group._id}/AddMember`}><Button>Add Members </Button></Link>
        </CardFooter>
      </Card>
        </>
      )
    }
    )}
    
      <Link href={`/AddSHG`}>
        <Button>Add New SHG</Button>
      </Link>
    </div>
  );
};

export default AllSHGs;
