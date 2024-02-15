import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as wayToPay from '../../actions'
import { mergeMap } from "rxjs/operators";
import { WayToPayService } from "src/app/services/wayToPay/way-to-pay.service";

@Injectable()
export class wayToPayCreationEffects{
   
    wayToPay$ = createEffect(
        () => this.action$.pipe(
            ofType(wayToPay.loadingCreateWayToPay),
            mergeMap(
                (data) => this.wayToPayService.create(data.item)
                .then(
                    (user: any) => {
                        return wayToPay.dataCreateWayToPaySucess({WayToPay: user})
                    }
                ).catch(
                    (err: any) => wayToPay.CreateWayToPayError({payload:err})
                )
            )
        )
    )

    constructor(
        private action$: Actions,
        private wayToPayService: WayToPayService,
    ){

    }
}

