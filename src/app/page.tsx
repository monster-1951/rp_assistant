import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dbConnect from "@/lib/dbConnect";
import SHGModel from "@/models/SHG.model";
import Link from "next/link";


export interface Group{
  _id:string,
  Name:string,
  RP:string,
  Members?:string[],
  createdAt:string,
  updatedAt:string,
  }
  
export default async function Home() {
  await dbConnect();
  
  const SHGList : Group[]= await SHGModel.find({});
  console.log(SHGList)
  return (
    <>
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
    </>
  );
}
