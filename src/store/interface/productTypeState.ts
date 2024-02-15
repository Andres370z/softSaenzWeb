import { Detail } from "../models/detailModels";

export interface productType{
    token:string,
    item:any,
    productsType: any,
    productsTypeCheck:number,
    loaded: boolean,
    loading: boolean,
    error: any
}