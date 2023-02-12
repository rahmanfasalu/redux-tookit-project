interface IUnit{
  imperial:string;
  metric: string;
}
interface IAvatar{
  id: string;
  width: number;
  height: number;
  url: string;
}

export interface IBreed{
    weight:IUnit;
    height:IUnit;
    id:string;
    name: string;
    bred_for:string;
    breed_group:string;
    life_span:string;
    temperament:string;
    origin:string;
    reference_image_id:string;
    image:IAvatar
}

export interface IBreedState {
  breeds:IBreed[];
}
