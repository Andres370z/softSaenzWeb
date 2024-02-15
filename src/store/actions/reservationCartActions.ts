import { createAction, props } from "@ngrx/store";

// getReservationCartService
export const loadingreservationCart = createAction('[ReservationCart] loadingreservationCart', props<{item: number}>());
export const datareservationCartSucess = createAction('[ReservationCart] setreservationCart',props<{ ReservationCart: any}>());
export const reservationCartError = createAction('[ReservationCart] reservationCartError',props<{payload: any}>());
//postReservationCartService
export const loadingCreateReservationCart = createAction('[ReservationCart] loadingCreateReservationCart', props<{item: any}>());
export const dataCreateReservationCartSucess = createAction('[ReservationCart] setCreateReservationCart',props<{ ReservationCart: any}>());
export const CreateReservationCartError = createAction('[ReservationCart] reservationCartError',props<{payload: any}>());
//deleteReservationCart
export const loadingDeleteReservationCart = createAction('[ReservationCart] loadingDeleteReservationCart', props<{item: any}>());
export const dataDeleteReservationCartSucess = createAction('[ReservationCart] setDeleteReservationCart',props<{ ReservationCart: any}>());
export const deleteReservationCartError = createAction('[ReservationCart] deleteReservationCartError',props<{payload: any}>());