import { createAction, props } from "@ngrx/store";
//Get
export const loadingProducts = createAction('[Products] loadingProducts', props<{item: string}>());
export const dataProductsSucess = createAction('[Products] setProducts',props<{ Products: any}>());
export const ProductsError = createAction('[Products] ProductsError',props<{payload: any}>());
// create
export const loadingCreateProducts = createAction('[Products] loadingCreateProducts', props<{item: any}>());
export const dataCreateProductsSucess = createAction('[Products] setCreateProducts',props<{ Products: any}>());
export const CreateProductsError = createAction('[Products] CreateProductsError',props<{payload: any}>());
//createProductList
export const loadingCreateProductList = createAction('[ProductList] loadingCreateProductList', props<{item: any}>());
export const dataCreateProductListSucess = createAction('[ProductList] setCreateProductList',props<{ ProductList: any}>());
export const CreateProductListError = createAction('[ProductList] CreateProductListError',props<{payload: any}>());
//editProducts
export const loadingEditProducts = createAction('[EditProducts] loadingeditProducts', props<{id: number, item: any}>());
export const dataEditProductsSucess = createAction('[EditProducts] seteditProducts',props<{ EditProducts: any}>());
export const editProductsError = createAction('[EditProducts] editProductsError',props<{payload: any}>());
//editProductList
export const loadingEditProductList = createAction('[EditProductList] loadingeditProductList', props<{id: number, item: any}>());
export const dataEditProductListSucess = createAction('[EditProductList] seteditProductList',props<{ EditProductList: any}>());
export const editProductListError = createAction('[EditProductList] editProductListError',props<{payload: any}>());
//getListTypeProducts
export const loadinggetListTypeProducts = createAction('[getListTypeProducts] loadinggetListTypeProducts', props<{id: number}>());
export const datagetListTypeProductsSucess = createAction('[getListTypeProducts] setgetListTypeProducts',props<{ listTypeProducts: any}>());
export const getListTypeProductsError = createAction('[getListTypeProducts] getListTypeProductsError',props<{payload: any}>());