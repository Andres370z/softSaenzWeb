import { authEnd } from "./authEndInterface";
import { Details } from "./detailState";


export interface PagesStates{
    detail: Details,
    auth: authEnd,
    products: any,
    proyectsClients: any,
    quality: any,
    reservationCart: any,
    reservationCreationCart: any,
    reservationDeleteCart: any,
    suppliers: any,
    typeProducts: any,
    wayToPay: any,
    booking: any,
    productsItem:any,
    bookingConsult: any,
    bookingDetailCreation: any,
    bookingDetailList: any,
    bookingDetailShow: any,
    bookingEdit: any,
    bookingList: any,
    bookingShow: any,
    detailBooking: any,
}