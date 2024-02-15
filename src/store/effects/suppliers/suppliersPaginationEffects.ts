import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as suppliers from '../../actions'
import { mergeMap } from "rxjs/operators";
import { SuppliersService } from "src/app/services/suppliers/suppliers.service";

@Injectable()
export class suppliersPaginationEffects{
   
    suppliers$ = createEffect(
        () => this.action$.pipe(
            ofType(suppliers.loadingSupplierPagination),
            mergeMap(
                (data) => this.suppliersService.getSupplierPagination(data.item)
                .then(
                    (user: any) => {
                        return suppliers.dataSupplierPaginationSucess({SupplierPagination: user})
                    }
                ).catch(
                    (err: any) => suppliers.SupplierPaginationError({payload:err})
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

