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
import { fetchData } from "@/lib/fetchSHGs";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import useSWR from 'swr';

const AllSHGs = () => {
  const [SHGList, setSHGList] = useState<Group[]>([]);
  const fetch = async () => {
    const res = (await fetchData()) || [];
    setSHGList(res);
    console.log(SHGList);
  };

  useEffect(() => {
    fetch();
  }, []);

 

  return (
    <div className="w-full ">
      {SHGList.map((group) => {
        return (
          <div key={group._id} className="grid grid-flow-col md:grid-cols-2 space-y-10">
            <Card  className="w-72 mx-auto h-72 shadow-2xl my-8">
              <>
                <CardHeader>
                  <CardTitle className="font-bold text-center">
                    {group.Name}
                  </CardTitle>
                </CardHeader>
              </>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <p className="font-semibold p-3 rounded-md">
                      See Members in This group
                    </p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Members in This group</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {
                      group.Members?.map((member) => {
                        let name = member.name
                        return <DropdownMenuItem key={member._id}>{name}</DropdownMenuItem>
                      }
                      )
                    }
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
              <CardFooter className="w-full">
                <Link
                  href={`/EditShg/${group.Name}/AddMember`}
                  className="w-fit mx-auto"
                >
                  <Button>Add Members </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        );
      })}

      <Link href={`/AddSHG`} className="w-full flex ">
        <Button className="w-fit mx-auto">Add New SHG</Button>
      </Link>
    </div>
  );
};

export default AllSHGs;
