import { createReducer, on } from "@ngrx/store";
import * as bookingActions from "../../actions";
import { Booking } from "../../interface/bookingState";

export const bookingListInitialState: Booking = {
    token:null,
    item:null,
    booking: null,
    loaded: null,
    loading: null,
    bookingCheck:0,
    error: null
}

const _bookingListReducer = createReducer(
    bookingListInitialState,
    on(bookingActions.dataBookingSucess, (state,{Booking}) =>({
        ...state,
        loading:false,
        loaded:true,
        bookingCheck:1,
        booking:{...Booking}
        
    })),
    on(bookingActions.loadingBooking,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(bookingActions.BookingError, (state, { payload }) =>({
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

export function bookingListReducer(state, action){
    return _bookingListReducer(state, action);
}