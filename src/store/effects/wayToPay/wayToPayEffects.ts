import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as wayToPay from '../../actions'
import { mergeMap } from "rxjs/operators";
import { WayToPayService } from "src/app/services/wayToPay/way-to-pay.service";

@Injectable()
export class wayToPayEffects{
   
    wayToPay$ = createEffect(
        () => this.action$.pipe(
            ofType(wayToPay.loadingWayToPay),
            mergeMap(
                () => this.wayToPayService.getWayToPay()
                .then(
                    (user: any) => {
                        return wayToPay.dataWayToPaySucess({WayToPay: user})
                    }
                ).catch(
                    (err: any) => wayToPay.wayToPayError({payload:err})
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

