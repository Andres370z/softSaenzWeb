import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateProductsService } from "src/app/services/products/create-products.service";

@Injectable()
export class productsCreationEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingCreateProducts),
            mergeMap(
                (data) => this.productsService.create(data.item)
                .then(
                    (user: any) => {
                        return products.dataCreateProductsSucess({Products: user})
                    }
                ).catch(
                    (err: any) => products.CreateProductsError({payload:err})
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

