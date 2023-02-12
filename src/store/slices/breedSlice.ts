import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";
import { IBreed, IBreedState } from "interface/breed.interface";

// Initial state
const initialState:IBreedState= {
    breeds:[]
}

// breedsSlice slice
export const breedsSlice = createSlice({
  name: 'breeds',
  initialState,  
  reducers: {
    getAllBreed:(state, action: PayloadAction<IBreed[]>)=>{
        state.breeds = action.payload
    },
    setAllBreeds:(state, action: PayloadAction<IBreed[]>)=>{
        state.breeds = action.payload
    },
  }
});

export const { getAllBreed } = breedsSlice.actions;
export default breedsSlice.reducer as Reducer<IBreedState, any>;