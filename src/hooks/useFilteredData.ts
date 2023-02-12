import { NonObjectKeys } from "components/DropDown/dropdown";
import React from "react";

export function useFilteredData<T>(items: T[],filterBy:NonObjectKeys<T>,query:string | undefined){
  const filteredItems:T[] = React.useMemo(() => {
    const sortableItems = [...items];
    if(query){
      return sortableItems.filter((item)=>{
        return  (item[filterBy] as string).toLowerCase().includes(query.toLowerCase());
      });
    }  
    return sortableItems;
  }, [items, query]);
  return {filteredItems };
};
