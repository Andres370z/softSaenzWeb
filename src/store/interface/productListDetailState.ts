import { Detail } from "../models/detailModels";

export interface productListDetailState{
    token:string,
    item:any,
    productListDetail: any,
    productListDetailCheck:number,
    loaded: boolean,
    loading: boolean,
    error: any
}