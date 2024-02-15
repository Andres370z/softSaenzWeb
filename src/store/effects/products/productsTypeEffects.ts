import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateProductsService } from "src/app/services/products/create-products.service";

@Injectable()
export class productsTypeEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadinggetListTypeProducts),
            mergeMap(
                (data) => this.productsService.getListTypeProducts(data.id)
                .then(
                    (user: any) => {
                        return products.datagetListTypeProductsSucess({listTypeProducts: user})
                    }
                ).catch(
                    (err: any) => products.getListTypeProductsError({payload:err})
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

