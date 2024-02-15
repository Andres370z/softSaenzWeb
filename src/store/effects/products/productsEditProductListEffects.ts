import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateProductsService } from "src/app/services/products/create-products.service";

@Injectable()
export class productsEditProductListEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingEditProductList),
            mergeMap(
                (data) => this.productsService.editProductList(data.id, data.item)
                .then(
                    (user: any) => {
                        return products.dataEditProductListSucess({EditProductList: user})
                    }
                ).catch(
                    (err: any) => products.editProductListError({payload:err})
                )
            )
            
            
        )
    )

    constructor(
        private action$: Actions,
        private productsService: CreateProductsService,
    ){

    }
}

