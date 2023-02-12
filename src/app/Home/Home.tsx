import DropDown from "components/DropDown/dropdown";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { IBreed } from "interface/breed.interface";
import React, { useEffect } from "react";
import { fetchAllBreeds } from "store/actions/breed.actions";

function Home() {
  const dispatch = useAppDispatch();
  const breeds:IBreed[] = useAppSelector((state)=>state.breedsSlice.breeds);

  useEffect(()=>{
    dispatch(fetchAllBreeds());
    return () => {}
  },[]);  

  return (
    <div style={{padding:'10%'}}>
      <label>Hunderase</label>
      <DropDown <IBreed>
         options={breeds}
       
         titleField="name"
         searchBy="name"
         descriptionField="temperament"
         placeholder="Velg hunderase"
         maybeOnChange={(item:IBreed)=>{
          console.log("Current Selected",item);
         }}
         defaultVal={undefined}
        />
    </div>
  );
}

export default Home

