import { createReducer, on } from "@ngrx/store";
import * as bookingActions from "../../actions";
import { Booking } from "../../interface/bookingState";

export const bookingEditInitialState: Booking = {
    token:null,
    item:null,
    booking: null,
    loaded: null,
    loading: null,
    bookingCheck:0,
    error: null
}

const _bookingEditReducer = createReducer(
    bookingEditInitialState,
    on(bookingActions.dataEditBookingSucess, (state,{EditBooking}) =>({
        ...state,
        loading:false,
        loaded:true,
        bookingCheck:3,
        booking:{...EditBooking}
        
    })),
    on(bookingActions.loadingEditBooking,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(bookingActions.editBookingError, (state, { payload }) =>({
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

export function bookingEditReducer(state, action){
    return _bookingEditReducer(state, action);
}