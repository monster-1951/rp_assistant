import React, { LegacyRef, RefObject, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const castes = [
  "SC",
  "ST",
  "BC-A",
  "BC-B",
  "BC-C",
  "BC-D",
  "BC-E",
  "OBC",
  "EBC",
  "GENERAL",
];

interface SelectCasteProps 
  {
    // name:string;
    onChange: (value:string)=>void;
    value:string | undefined;
    // ref:string
  }


const SelectCaste = ({value,onChange}:SelectCasteProps) => {
//  const valRef = useRef<HTMLSpanElement>(ref)
  useEffect(() => {
  //  console.log(ref.current) 
  }
  )
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-[180px]" >
        <SelectValue placeholder="Caste" />
      </SelectTrigger>
      <SelectContent>
        {castes.map((caste:string,i) => {
          return(
           
             <SelectItem value={caste} key={i}>
                {caste}
            </SelectItem>
    
          );
        }
        )}
      </SelectContent>
    </Select>
  );
};

export default SelectCaste;
