'use client'
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
import { fetchData } from "@/lib/fetchSHGs";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import useSWR from 'swr';

const AllSHGs =  () => {
 const [SHGList, setSHGList] = useState<Group[]>([])
  const fetch = async () => {
    const res = await fetchData() || []
    setSHGList(res)
    console.log(SHGList)
    
  }

  const {data,error} = useSWR('/api/FetchSHGs',fetch,{
    revalidateOnFocus:false,
    revalidateOnReconnect:false,
    refreshInterval:360000,
  })
  
  useEffect(() => {
    fetch()
  },[])


  return (
    <div>
      {SHGList.map((group) => {
        return (
          <>
            <Card key={group._id}>
              <>
                <CardHeader>
                  <CardTitle>{group.Name}</CardTitle>
                  <CardDescription>
                    {group.Name} was created by {group.RP} .This group has{" "}
                    {group.Members?.length} members
                  </CardDescription>
                </CardHeader>
              </>
              <CardContent>
                <p>Members in This group</p>
              </CardContent>
              <CardFooter>
                <p>Date of Creation</p>
                <Link href={`/EditShg/${group._id}/AddMember`}>
                  <Button>Add Members </Button>
                </Link>
              </CardFooter>
            </Card>
          </>
        );
      })}

      <Link href={`/AddSHG`}>
        <Button>Add New SHG</Button>
      </Link>
    </div>
  );
};

export default AllSHGs;
