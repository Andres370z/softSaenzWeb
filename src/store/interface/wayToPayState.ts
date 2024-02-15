import { Detail } from "../models/detailModels";

export interface WayToPay{
    token:string,
    item:any,
    wayToPay: any,
    loaded: boolean,
    loading: boolean,
    wayToPayCheck: number,
    error: any
}