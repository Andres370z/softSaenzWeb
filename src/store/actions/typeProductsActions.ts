import { createAction, props } from "@ngrx/store";

// getReservationCartService
export const loadingTypeProducts = createAction('[TypeProducts] loadingtypeProducts');
export const dataTypeProductsSucess = createAction('[TypeProducts] settypeProducts',props<{ TypeProducts: any}>());
export const typeProductsError = createAction('[TypeProducts] typeProductsError',props<{payload: any}>());
//postReservationCartService
export const loadingCreateTypeProducts = createAction('[TypeProducts] loadingCreateTypeProducts', props<{item: any}>());
export const dataCreateTypeProductsSucess = createAction('[TypeProducts] setCreateTypeProducts',props<{ TypeProducts: any}>());
export const CreateTypeProductsError = createAction('[TypeProducts] typeProductsError',props<{payload: any}>());
