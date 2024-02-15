import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { ReservationCartService } from "src/app/services/reservationCart/reservation-cart.service";

@Injectable()
export class reservationDeleteCartEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingDeleteReservationCart),
            mergeMap(
                (data) => this.reservationCartService.deleteReservationCart(data.item)
                .then(
                    (user: any) => {
                        return products.dataDeleteReservationCartSucess({ReservationCart: user})
                    }
                ).catch(
                    (err: any) => products.deleteReservationCartError({payload:err})
                )
            )
        )
    )

    constructor(
        private action$: Actions,
        private reservationCartService: ReservationCartService,
    ){

    }
}

