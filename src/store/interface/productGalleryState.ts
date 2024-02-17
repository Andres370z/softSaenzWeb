import { Detail } from "../models/detailModels";

export interface ProductGalleryState{
    token:string,
    item:any,
    productGallery: any,
    productGalleryCheck:number,
    loaded: boolean,
    loading: boolean,
    error: any
}