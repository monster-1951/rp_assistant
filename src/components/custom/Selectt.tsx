import React, { LegacyRef, RefObject, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



interface SelecttProps 
  {
    // name:string;
    onChange: (value:string)=>void;
    value:string | undefined;
    options:string[],
    placeHolder:string,
    // ref:string
  }


const Selectt = ({value,onChange,options,placeHolder}:SelecttProps) => {
//  const valRef = useRef<HTMLSpanElement>(ref)
  useEffect(() => {
  //  console.log(ref.current) 
  }
  )
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-[180px]" >
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((caste:string,i) => {
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

export default Selectt;
