import { createReducer, on } from "@ngrx/store";
import * as products from "../../actions";
import { Products } from "../../interface/productState";


export const productsInitialState: Products = {
    token: null,
    item:null,
    products: null,
    productsCheck:0,
    loaded: null,
    loading:null,
    error:null
}

const _productsReducer = createReducer(
    productsInitialState,

    on(products.loadingCreateProducts, (state, { item }) =>({
        ...state,
       loading:true,
       item: {...item},
       error: null
        
    })),
    on(products.dataCreateProductsSucess, (state, {Products}) =>({
        ...state,
        loading:false,
        loaded:true,
        productsCheck:2,
        products:{ ...Products },
        error: null
    })),
    on(products.CreateProductsError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }
        
    })),
    on(products.loadingCreateProductList, (state, { item }) =>({
        ...state,
       loading:true,
       item: {...item},
       error: null
        
    })),
    on(products.dataCreateProductListSucess, (state, {ProductList}) =>({
        ...state,
        loading:false,
        loaded:true,
        productsCheck:3,
        products:{ ...ProductList },
        error: null
    })),
    on(products.CreateProductListError, (state, { payload }) =>({
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

export function productsReducer(state, action){
    return _productsReducer(state, action);
}