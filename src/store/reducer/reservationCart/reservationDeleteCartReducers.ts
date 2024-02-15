import { createReducer, on } from "@ngrx/store";
import * as reservation from "../../actions";
import { ReservationCart } from "../../interface/reservationCartState";

export const reservationDeleteCartInitialState: ReservationCart = {
    token:null,
    item:null,
    reservationCart: null,
    loaded: null,
    loading: null,
    delete:null,
    reservationCheck:0,
    error: null
}

const _reservationDeleteCartReducer = createReducer(
    reservationDeleteCartInitialState,
    on(reservation.dataDeleteReservationCartSucess, (state,{ReservationCart}) =>({
        ...state,
        loading:false,
        loaded:true,
        reservationCart: null,
        reservationCheck:3,
        delete: ReservationCart,
        
    })),
    on(reservation.loadingDeleteReservationCart,  (state) =>({
        ...state,
        loading:true
        
    })),
    on(reservation.deleteReservationCartError, (state, { payload }) =>({
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

export function reservationDeleteCartReducer(state, action){
    return _reservationDeleteCartReducer(state, action);
}
