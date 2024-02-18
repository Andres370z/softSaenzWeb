import { ActionReducerMap } from "@ngrx/store";
import { PagesStates } from "./interface/pagesInterface";
import * as reducer  from "./reducer";

export const pagesReducers: ActionReducerMap<PagesStates> = {
    detail: reducer.detailReducer,
    auth: reducer.authReducer,
    products: reducer.productsReducer,
    proyectsClients: reducer.proyectsClientsReducer,
    quality: reducer.qualityReducer,
    reservationCart: reducer.reservationCartReducer,
    suppliers: reducer.suppliersReducer,
    typeProducts: reducer.typeProductsReducer,
    wayToPay: reducer.wayToPayReducer,
    booking: reducer.bookingReducer,
    productsItem: reducer.productsItemReducer,
    reservationCreationCart: reducer.reservationCreationCartReducer,
    reservationDeleteCart: reducer.reservationDeleteCartReducer,
    bookingConsult: reducer.bookingConsultReducer,
    bookingDetailCreation: reducer.bookingDetailCreationReducer,
    bookingDetailList: reducer.bookingDetailListReducer,
    bookingDetailShow: reducer.bookingDetailShowReducer,
    bookingEdit: reducer.bookingEditReducer,
    bookingList: reducer.bookingListReducer,
    bookingShow: reducer.bookingShowReducer,
    detailBooking: reducer.detailBookingReducer,
    productsTypeItem:reducer.productsTypeReducer,
    productsGallery: reducer.productsGalleryReducer,
    productListDetail: reducer.productListDetailReducer,
    quoteServices: reducer.quoteServicesReducer
}