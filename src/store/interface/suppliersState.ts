import { Detail } from "../models/detailModels";

export interface Suppliers{
    token:string,
    item:any,
    suppliers: any,
    loaded: boolean,
    loading: boolean,
    suppliersCheck: number,
    error: any
}