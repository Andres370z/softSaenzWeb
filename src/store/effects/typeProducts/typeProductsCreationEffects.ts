import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateTypeProductsService } from "src/app/services/typeProducts/create-type-products.service";

@Injectable()
export class typeProductsCreationEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingCreateTypeProducts),
            mergeMap(
                (data) => this.typeProductsService.create(data.item)
                .then(
                    (user: any) => {
                        return products.dataCreateTypeProductsSucess({TypeProducts: user})
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

