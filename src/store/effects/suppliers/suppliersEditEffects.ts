import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as suppliers from '../../actions'
import { mergeMap } from "rxjs/operators";
import { SuppliersService } from "src/app/services/suppliers/suppliers.service";

@Injectable()
export class suppliersEditEffects{
   
    suppliers$ = createEffect(
        () => this.action$.pipe(
            ofType(suppliers.loadingEditSuppliers),
            mergeMap(
                (data) => this.suppliersService.editSupplier(data.id, data.item)
                .then(
                    (user: any) => {
                        return suppliers.dataEditSuppliersSucess({EditSuppliers: user})
                    }
                ).catch(
                    (err: any) => suppliers.editSuppliersError({payload:err})
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

