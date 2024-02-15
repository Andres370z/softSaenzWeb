import { createReducer, on } from "@ngrx/store";
import * as bookingActions from "../../actions";
import { Booking } from "../../interface/bookingState";

export const bookingInitialState: Booking = {
    token:null,
    item:null,
    booking: null,
    loaded: null,
    loading: null,
    bookingCheck:0,
    error: null
}

const _bookingReducer = createReducer(
    bookingInitialState,
    on(bookingActions.dataCreateBookingSucess, (state,{Booking}) =>({
        ...state,
        loading:false,
        loaded:true,
        bookingCheck:2,
        booking:{...Booking}
        
    })),
    on(bookingActions.loadingCreateBooking,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(bookingActions.CreateBookingError, (state, { payload }) =>({
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

export function bookingReducer(state, action){
    return _bookingReducer(state, action);
}