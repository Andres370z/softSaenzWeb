import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateProductsService } from "src/app/services/products/create-products.service";

@Injectable()
export class productsCreationListEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingCreateProductList),
            mergeMap(
                (data) => this.productsService.createProductList(data.item)
                .then(
                    (user: any) => {
                        return products.dataCreateProductListSucess({ProductList: user})
                    }
                ).catch(
                    (err: any) => products.CreateProductListError({payload:err})
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

