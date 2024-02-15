import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateProductsService } from "src/app/services/products/create-products.service";

@Injectable()
export class productsEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingProducts),
            mergeMap(
                (data) => this.productsService.getProductList(data.item)
                .then(
                    (user: any) => {
                        return products.dataProductsSucess({Products: user})
                    }
                ).catch(
                    (err: any) => products.ProductsError({payload:err})
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

