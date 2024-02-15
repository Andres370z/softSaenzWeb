import { createReducer, on } from "@ngrx/store";
import * as bookingActions from "../../actions";
import { Booking } from "../../interface/bookingState";

export const bookingShowInitialState: Booking = {
    token:null,
    item:null,
    booking: null,
    loaded: null,
    loading: null,
    bookingCheck:0,
    error: null
}

const _bookingShowReducer = createReducer(
    bookingShowInitialState,
    on(bookingActions.dataBookingShowSucess, (state,{BookingShow}) =>({
        ...state,
        loading:false,
        loaded:true,
        bookingCheck:4,
        booking:{...BookingShow}
        
    })),
    on(bookingActions.loadingBookingShow,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(bookingActions.bookingShowError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.error.message,
            status: payload.status,
        }
        
    }))
)

export function bookingShowReducer(state, action){
    return _bookingShowReducer(state, action);
}