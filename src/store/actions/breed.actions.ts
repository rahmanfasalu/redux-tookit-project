
import { IBreed } from "interface/breed.interface";
import { getAllBreed } from "store/slices/breedSlice";
import { AppThunk } from "store/store";
import { API } from "constants/api.constants";
import { breedService } from "services/breed.service";


export const fetchAllBreeds =(): AppThunk =>(dispatch, getState) => {
    breedService.getBreeds(API.GET_BREEDS).then((response)=>{
       dispatch(getAllBreed(response)) 
    })
}



