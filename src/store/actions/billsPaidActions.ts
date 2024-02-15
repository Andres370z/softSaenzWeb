import { createAction, props } from "@ngrx/store";

// getReservationCartService
export const loadingBillsPaid = createAction('[BillsPaid] loadingBillsPaid', props<{item: string}>());
export const dataBillsPaidSucess = createAction('[BillsPaid] setBillsPaid',props<{ BillsPaid: any}>());
export const billsPaidError = createAction('[BillsPaid] BillsPaidError',props<{payload: any}>());
//postReservationCartService
export const loadingCreateBillsPaid = createAction('[BillsPaid] loadingCreateBillsPaid', props<{item: any}>());
export const dataCreateBillsPaidSucess = createAction('[BillsPaid] setCreateBillsPaid',props<{ BillsPaid: any}>());
export const createBillsPaidError = createAction('[BillsPaid] BillsPaidError',props<{payload: any}>());
//editBillsPaid
export const loadingEditBillsPaid = createAction('[EditBillsPaid] loadingeditBillsPaid', props<{id: number, item: any}>());
export const dataEditBillsPaidSucess = createAction('[EditBillsPaid] seteditBillsPaid',props<{ EditBillsPaid: any}>());
export const editBillsPaidError = createAction('[EditBillsPaid] editBillsPaidError',props<{payload: any}>());
//BillsPaidFull
export const loadingBillsPaidFull = createAction('[BillsPaidFull] loadingBillsPaidFull', props<{item: string}>());
export const dataBillsPaidFullSucess = createAction('[BillsPaidFull] setBillsPaidFull',props<{ BillsPaidFull: any}>());
export const billsPaidFullError = createAction('[BillsPaidFull] BillsPaidFullError',props<{payload: any}>());
//BillsPaidAdmin
export const loadingBillsPaidAdmin = createAction('[BillsPaidAdmin] loadingBillsPaidAdmin', props<{item: string}>());
export const dataBillsPaidAdminSucess = createAction('[BillsPaidAdmin] setBillsPaidAdmin',props<{ BillsPaidAdmin: any}>());
export const billsPaidAdminError = createAction('[BillsPaidAdmin] BillsPaidAdminError',props<{payload: any}>());