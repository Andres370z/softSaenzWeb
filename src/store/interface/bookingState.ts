import { Detail } from "../models/detailModels";

export interface Booking{
    token:string,
    item:any,
    booking: any,
    loaded: boolean,
    loading: boolean,
    bookingCheck: number,
    error: any
}