import { createReducer, on } from "@ngrx/store";
import * as productsType from "../../actions";
import { productType } from "src/store/interface/productTypeState";



export const productsTypeInitialState: productType = {
    token: null,
    item:null,
    productsType: null,
    productsTypeCheck:0,
    loaded: null,
    loading:null,
    error:null
}

const _productsTypeReducer = createReducer(
    productsTypeInitialState,

    on(productsType.loadinggetListTypeProducts, (state, { id }) =>({
        ...state,
       loading:true,
       item: id,
       error: null
        
    })),
    on(productsType.datagetListTypeProductsSucess, (state, {listTypeProducts}) =>({
        ...state,
        loading:false,
        loaded:true,
        productsTypeCheck:2,
        productsType:listTypeProducts,
        error: null
    })),
    on(productsType.getListTypeProductsError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }
        
    }))
    
)

export function productsTypeReducer(state, action){
    return _productsTypeReducer(state, action);
}