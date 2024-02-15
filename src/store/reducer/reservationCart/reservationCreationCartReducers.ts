import { createReducer, on } from "@ngrx/store";
import * as reservation from "../../actions";
import { ReservationCart } from "../../interface/reservationCartState";

export const reservationCreationCartInitialState: ReservationCart = {
    token:null,
    item:null,
    reservationCart: null,
    loaded: null,
    loading: null,
    delete:null,
    reservationCheck:0,
    error: null
}

const _reservationCreationCartReducer = createReducer(
    reservationCreationCartInitialState,
    on(reservation.dataCreateReservationCartSucess, (state,{ReservationCart}) =>({
        ...state,
        loading:false,
        loaded:false,
        reservationCheck:2,
        reservationCart:ReservationCart,
        item:ReservationCart
        
    })),
    on(reservation.loadingCreateReservationCart,  (state) =>({
        ...state,
        loading:true
        
    })),
    on(reservation.CreateReservationCartError, (state, { payload }) =>({
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

export function reservationCreationCartReducer(state, action){
    return _reservationCreationCartReducer(state, action);
}
