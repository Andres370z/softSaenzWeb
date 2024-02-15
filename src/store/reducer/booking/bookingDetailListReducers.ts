import { createReducer, on } from "@ngrx/store";
import * as bookingActions from "../../actions";
import { Booking } from "../../interface/bookingState";

export const bookingDetailListInitialState: Booking = {
    token:null,
    item:null,
    booking: null,
    loaded: null,
    loading: null,
    bookingCheck:0,
    error: null
}

const _bookingDetailListReducer = createReducer(
    bookingDetailListInitialState,
    on(bookingActions.dataDetailBookingSucess, (state,{DetailBooking}) =>({
        ...state,
        loading:false,
        loaded:true,
        bookingCheck:5,
        booking: DetailBooking
        
    })),
    on(bookingActions.loadingDetailBooking,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(bookingActions.detailBookingError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }
        
    }))
)

export function bookingDetailListReducer(state, action){
    return _bookingDetailListReducer(state, action);
}