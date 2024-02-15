import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateTypeProductsService } from "src/app/services/typeProducts/create-type-products.service";

@Injectable()
export class typeProductsEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingTypeProducts),
            mergeMap(
                () => this.typeProductsService.getTypeProducts()
                .then(
                    (user: any) => {
                        return products.dataTypeProductsSucess({TypeProducts: user})
                    }
                ).catch(
                    (err: any) => products.typeProductsError({payload:err})
                )
            )
        )
    )

    constructor(
        private action$: Actions,
        private typeProductsService: CreateTypeProductsService,
    ){

    }
}

