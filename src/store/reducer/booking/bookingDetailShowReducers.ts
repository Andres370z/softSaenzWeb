import { createReducer, on } from "@ngrx/store";
import * as bookingActions from "../../actions";
import { Booking } from "../../interface/bookingState";

export const bookingDetailShowInitialState: Booking = {
    token:null,
    item:null,
    booking: null,
    loaded: null,
    loading: null,
    bookingCheck:0,
    error: null
}

const _bookingDetailShowReducer = createReducer(
    bookingDetailShowInitialState,
    on(bookingActions.dataDetailShowSucess, (state,{DetailShow}) =>({
        ...state,
        loading:false,
        loaded:true,
        bookingCheck:6,
        booking:{...DetailShow}
        
    })),
    on(bookingActions.loadingDetailShow,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(bookingActions.detailShowError, (state, { payload }) =>({
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

export function bookingDetailShowReducer(state, action){
    return _bookingDetailShowReducer(state, action);
}