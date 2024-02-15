import { Detail } from "../models/detailModels";

export interface Products{
    token:string,
    item:any,
    products: any,
    productsCheck:number,
    loaded: boolean,
    loading: boolean,
    error: any
}