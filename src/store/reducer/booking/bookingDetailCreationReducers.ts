import { createReducer, on } from "@ngrx/store";
import * as bookingActions from "../../actions";
import { Booking } from "../../interface/bookingState";

export const bookingDetailCreationInitialState: Booking = {
    token:null,
    item:null,
    booking: null,
    loaded: null,
    loading: null,
    bookingCheck:0,
    error: null
}

const _bookingDetailCreationReducer = createReducer(
    bookingDetailCreationInitialState,
    on(bookingActions.dataBookingAdminSucess, (state,{BookingAdmin}) =>({
        ...state,
        loading:false,
        loaded:true,
        bookingCheck:8,
        booking:BookingAdmin
        
    })),
    on(bookingActions.loadingBookingAdmin,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(bookingActions.bookingAdminError, (state, { payload }) =>({
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

export function bookingDetailCreationReducer(state, action){
    return _bookingDetailCreationReducer(state, action);
}