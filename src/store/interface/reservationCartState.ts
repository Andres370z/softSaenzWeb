import { Detail } from "../models/detailModels";

export interface ReservationCart{
    token:string,
    item:any,
    delete:any,
    reservationCart: any,
    loaded: boolean,
    loading: boolean,
    reservationCheck: number,
    error: any
}