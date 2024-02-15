import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as suppliers from '../../actions'
import { mergeMap } from "rxjs/operators";
import { SuppliersService } from "src/app/services/suppliers/suppliers.service";

@Injectable()
export class suppliersEffects{
   
    suppliers$ = createEffect(
        () => this.action$.pipe(
            ofType(suppliers.loadingSuppliers),
            mergeMap(
                (data) => this.suppliersService.getSupplier(data.item)
                .then(
                    (user: any) => {
                        return suppliers.dataSuppliersSucess({Suppliers: user})
                    }
                ).catch(
                    (err: any) => suppliers.SuppliersError({payload:err})
                )
            )
        )
    )

    constructor(
        private action$: Actions,
        private suppliersService: SuppliersService,
    ){

    }
}

