import { createReducer, on } from "@ngrx/store";
import * as products from "../actions";
import { Products } from "../interface/productState";


export const editProductsInitialState: Products = {
    token: null,
    item:null,
    products: null,
    productsCheck:0,
    loaded: null,
    loading:null,
    error:null
}

const _editProductsReducer = createReducer(
    editProductsInitialState,
    on(products.loadingEditProductList, (state, { id, item }) =>({
        ...state,
       loading:true,
       token: id.toString(),
       item: item,
       error: null
        
    })),
    on(products.dataEditProductListSucess, (state, {EditProductList}) =>({
        ...state,
        loading:false,
        loaded:true,
        productsCheck:4,
        products:{ ...EditProductList },
        error: null
    })),
    on(products.editProductListError, (state, { payload }) =>({
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
    on(products.loadingEditProducts, (state, { id, item }) =>({
        ...state,
       loading:true,
       token: id.toString(),
       item: {...item},
       error: null
        
    })),
    on(products.dataEditProductsSucess, (state, {EditProducts}) =>({
        ...state,
        loading:false,
        loaded:true,
        productsCheck:5,
        products:{ ...EditProducts },
        error: null
    })),
    on(products.editProductsError, (state, { payload }) =>({
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
)

export function editProductsReducer(state, action){
    return _editProductsReducer(state, action);
}