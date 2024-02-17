import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateProductsService } from "src/app/services/products/create-products.service";

@Injectable()
export class productsGalleryEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadinggetgalleryProducts),
            mergeMap(
                (data) => this.productsService.getgalleryProducts(data.item.toString())
                .then(
                    (user: any[]) => {
                        return products.datagetgalleryProductsSucess({galleryProducts: user})
                    }
                ).catch(
                    (err: any) => products.getgalleryProductsError({payload:err})
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

