import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as suppliers from '../../actions'
import { mergeMap } from "rxjs/operators";
import { SuppliersService } from "src/app/services/suppliers/suppliers.service";

@Injectable()
export class suppliersCreationEffects{
   
    suppliers$ = createEffect(
        () => this.action$.pipe(
            ofType(suppliers.loadingCreateSuppliers),
            mergeMap(
                (data) => this.suppliersService.createSupplier(data.item)
                .then(
                    (user: any) => {
                        return suppliers.dataCreateSuppliersSucess({Suppliers: user})
                    }
                ).catch(
                    (err: any) => suppliers.CreateSuppliersError({payload:err})
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

