import { createReducer, on } from "@ngrx/store";
import * as reservation from "../../actions";
import { ReservationCart } from "../../interface/reservationCartState";

export const reservationCartInitialState: ReservationCart = {
    token:null,
    item:null,
    reservationCart: null,
    loaded: null,
    loading: null,
    delete:null,
    reservationCheck:0,
    error: null
}

const _reservationCartReducer = createReducer(
    reservationCartInitialState,
    on(reservation.datareservationCartSucess, (state,{ReservationCart}) =>({
        ...state,
        loading:false,
        loaded:false,
        item:null,
        reservationCheck:1,
        reservationCart:ReservationCart
        
    })),
    on(reservation.loadingreservationCart,  (state) =>({
        ...state,
        loading:true
        
    })),
    on(reservation.reservationCartError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.error.message,
            status: payload.status,
        }
        
    }))
)

export function reservationCartReducer(state, action){
    return _reservationCartReducer(state, action);
}
