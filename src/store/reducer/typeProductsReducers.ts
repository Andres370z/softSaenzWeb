import { createReducer, on } from "@ngrx/store";
import * as typeProductsActions from "../actions";
import { TypeProducts } from "../interface/typeProductsState";

export const typeProductsInitialState: TypeProducts = {
    token:null,
    item:null,
    typeProducts: null,
    loaded: null,
    loading: null,
    typeProductsCheck:0,
    error: null
}

const _typeProductsReducer = createReducer(
    typeProductsInitialState,
    on(typeProductsActions.dataTypeProductsSucess, (state,{TypeProducts}) =>({
        ...state,
        loading:false,
        loaded:true,
        typeProductsCheck:1,
        typeProducts:TypeProducts
        
    })),
    on(typeProductsActions.loadingTypeProducts,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(typeProductsActions.typeProductsError, (state, { payload }) =>({
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

export function typeProductsReducer(state, action){
    return _typeProductsReducer(state, action);
}