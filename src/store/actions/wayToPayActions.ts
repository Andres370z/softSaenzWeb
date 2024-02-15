import { createAction, props } from "@ngrx/store";

// getReservationCartService
export const loadingWayToPay = createAction('[WayToPay] loadingWayToPay');
export const dataWayToPaySucess = createAction('[WayToPay] setWayToPay',props<{ WayToPay: any}>());
export const wayToPayError = createAction('[WayToPay] WayToPayError',props<{payload: any}>());
//postReservationCartService
export const loadingCreateWayToPay = createAction('[WayToPay] loadingCreateWayToPay', props<{item: any}>());
export const dataCreateWayToPaySucess = createAction('[WayToPay] setCreateWayToPay',props<{ WayToPay: any}>());
export const CreateWayToPayError = createAction('[WayToPay] WayToPayError',props<{payload: any}>());