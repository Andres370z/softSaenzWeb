import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { ReservationCartService } from "src/app/services/reservationCart/reservation-cart.service";

@Injectable()
export class reservationCartEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingreservationCart),
            mergeMap(
                (data) => this.reservationCartService.getReservationCart(data.item)
                .then(
                    (user: any) => {
                        return products.datareservationCartSucess({ReservationCart: user})
                    }
                ).catch(
                    (err: any) => products.reservationCartError({payload:err})
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

