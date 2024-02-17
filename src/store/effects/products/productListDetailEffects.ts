import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateProductsService } from "src/app/services/products/create-products.service";

@Injectable()
export class productListDetailEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingProductListDetail),
            mergeMap(
                (data) => this.productsService.productListDetail(data.item)
                .then(
                    (user: any) => {
                        return products.dataProductListDetailSucess({productListDetail: user})
                    }
                ).catch(
                    (err: any) => products.productListDetailError({payload:err})
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

