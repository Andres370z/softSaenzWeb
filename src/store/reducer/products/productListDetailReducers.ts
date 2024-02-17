import { createReducer, on } from "@ngrx/store";
import * as products from "../../actions";
import { productListDetailState } from "src/store/interface/productListDetailState";


export const productListDetailInitialState: productListDetailState = {
    token: null,
    item:null,
    productListDetail: null,
    productListDetailCheck:0,
    loaded: null,
    loading:null,
    error:null
}

const _productListDetailReducer = createReducer(
    productListDetailInitialState,

    on(products.loadingProductListDetail, (state, { item }) =>({
        ...state,
       loading:true,
       item: item,
       error: null
        
    })),
    on(products.dataProductListDetailSucess, (state, {productListDetail}) =>({
        ...state,
        loading:false,
        loaded:true,
        productListDetailCheck:2,
        productListDetail:{...productListDetail},
        error: null
    })),
    on(products.productListDetailError, (state, { payload }) =>({
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

export function productListDetailReducer(state, action){
    return _productListDetailReducer(state, action);
}