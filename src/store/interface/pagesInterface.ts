import { authEnd } from "./authEndInterface";
import { Details } from "./detailState";


export interface PagesStates{
    detail: Details,
    auth: authEnd,
    products: any,
    productsGallery: any,
    proyectsClients: any,
    productListDetail: any,
    quality: any,
    reservationCart: any,
    reservationCreationCart: any,
    reservationDeleteCart: any,
    suppliers: any,
    typeProducts: any,
    wayToPay: any,
    booking: any,
    productsItem:any,
    productsTypeItem:any,
    bookingConsult: any,
    bookingDetailCreation: any,
    bookingDetailList: any,
    bookingDetailShow: any,
    bookingEdit: any,
    bookingList: any,
    bookingShow: any,
    detailBooking: any,
    quoteServices: any,
}