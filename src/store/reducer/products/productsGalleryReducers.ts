import { createReducer, on } from "@ngrx/store";
import * as products from "../../actions";
import { ProductGalleryState } from "src/store/interface/productGalleryState";


export const productsGalleryInitialState: ProductGalleryState = {
    token: null,
    item:null,
    productGallery: null,
    productGalleryCheck:0,
    loaded: null,
    loading:null,
    error:null
}

const _productsGalleryReducer = createReducer(
    productsGalleryInitialState,

    on(products.loadinggetgalleryProducts, (state, { item }) =>({
        ...state,
       loading:true,
       item: item,
       error: null
        
    })),
    on(products.datagetgalleryProductsSucess, (state, {galleryProducts}) =>({
        ...state,
        loading:false,
        loaded:true,
        productGalleryCheck:2,
        productGallery:galleryProducts,
        error: null
    })),
    on(products.getgalleryProductsError, (state, { payload }) =>({
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

export function productsGalleryReducer(state, action){
    return _productsGalleryReducer(state, action);
}