import { createReducer, on } from "@ngrx/store";
import * as suppliersActions from "../actions";
import { Suppliers } from "../interface/suppliersState";

export const suppliersInitialState: Suppliers = {
    token:null,
    item:null,
    suppliers: null,
    loaded: null,
    loading: null,
    suppliersCheck:0,
    error: null
}

const _suppliersReducer = createReducer(
    suppliersInitialState,
    on(suppliersActions.dataSuppliersSucess, (state,{Suppliers}) =>({
        ...state,
        loading:false,
        loaded:true,
        suppliersCheck:1,
        suppliers:Suppliers
        
    })),
    on(suppliersActions.loadingSuppliers,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(suppliersActions.SuppliersError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.error.message,
            status: payload.status,
        }
        
    })),
    on(suppliersActions.dataCreateSuppliersSucess, (state,{Suppliers}) =>({
        ...state,
        loading:false,
        loaded:true,
        suppliersCheck:2,
        suppliers:Suppliers
        
    })),
    on(suppliersActions.loadingCreateSuppliers,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(suppliersActions.CreateSuppliersError, (state, { payload }) =>({
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

export function suppliersReducer(state, action){
    return _suppliersReducer(state, action);
}