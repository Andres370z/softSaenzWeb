import { Detail } from "../models/detailModels";

export interface TypeProducts{
    token:string,
    item:any,
    typeProducts: any,
    loaded: boolean,
    loading: boolean,
    typeProductsCheck: number,
    error: any
}