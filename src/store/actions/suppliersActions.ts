import { createAction, props } from "@ngrx/store";

// getReservationCartService
export const loadingSuppliers = createAction('[Suppliers] loadingSuppliers', props<{item: string}>());
export const dataSuppliersSucess = createAction('[Suppliers] setSuppliers',props<{ Suppliers: any}>());
export const SuppliersError = createAction('[Suppliers] SuppliersError',props<{payload: any}>());
//postReservationCartService
export const loadingCreateSuppliers = createAction('[Suppliers] loadingCreateSuppliers', props<{item: any}>());
export const dataCreateSuppliersSucess = createAction('[Suppliers] setCreateSuppliers',props<{ Suppliers: any}>());
export const CreateSuppliersError = createAction('[Suppliers] SuppliersError',props<{payload: any}>());
//editSuppliers
export const loadingEditSuppliers = createAction('[EditSuppliers] loadingeditSuppliers', props<{id: number, item: any}>());
export const dataEditSuppliersSucess = createAction('[EditSuppliers] seteditSuppliers',props<{ EditSuppliers: any}>());
export const editSuppliersError = createAction('[EditSuppliers] editSuppliersError',props<{payload: any}>());
//SupplierPagination
export const loadingSupplierPagination = createAction('[SupplierPagination] loadingSupplierPagination', props<{item: string}>());
export const dataSupplierPaginationSucess = createAction('[SupplierPagination] setSupplierPagination',props<{ SupplierPagination: any}>());
export const SupplierPaginationError = createAction('[SupplierPagination] SupplierPaginationError',props<{payload: any}>());