import { createReducer, on } from "@ngrx/store";
import * as bookingActions from "../../actions";
import { Booking } from "../../interface/bookingState";

export const bookingConsultInitialState: Booking = {
    token:null,
    item:null,
    booking: null,
    loaded: null,
    loading: null,
    bookingCheck:0,
    error: null
}

const _bookingConsultReducer = createReducer(
    bookingConsultInitialState,
    on(bookingActions.dataBookingConsultFullSucess, (state,{BookingConsultFull}) =>({
        ...state,
        loading:false,
        loaded:true,
        bookingCheck:7,
        booking:BookingConsultFull
        
    })),
    on(bookingActions.loadingBookingConsultFull,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(bookingActions.bookingConsultFullError, (state, { payload }) =>({
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

export function bookingConsultReducer(state, action){
    return _bookingConsultReducer(state, action);
}