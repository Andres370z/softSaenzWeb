import { createReducer, on } from "@ngrx/store";
import * as products from "../../actions";
import { Products } from "../../interface/productState";


export const productsItemInitialState: Products = {
    token: null,
    item:null,
    products: null,
    productsCheck:0,
    loaded: null,
    loading:null,
    error:null
}

const _productsItemReducer = createReducer(
    productsItemInitialState,
    on(products.loadingProducts, (state, { item }) =>({
        ...state,
       loading:true,
       token: item,
       error: null
        
    })),
    on(products.dataProductsSucess, (state, {Products}) =>({
        ...state,
        loading:false,
        loaded:true,
        productsCheck:1,
        products:Products,
        error: null
    })),
    on(products.ProductsError, (state, { payload }) =>({
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

export function productsItemReducer(state, action){
    return _productsItemReducer(state, action);
}