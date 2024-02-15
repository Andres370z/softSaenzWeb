import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as products from '../../actions'
import { mergeMap } from "rxjs/operators";
import { ReservationCartService } from "src/app/services/reservationCart/reservation-cart.service";

@Injectable()
export class reservationCreationCartEffects{
   
    Products$ = createEffect(
        () => this.action$.pipe(
            ofType(products.loadingCreateReservationCart),
            mergeMap(
                (data) => this.reservationCartService.create(data.item)
                .then(
                    (user: any) => {
                        return products.dataCreateReservationCartSucess({ReservationCart: user})
                    }
                ).catch(
                    (err: any) => products.CreateReservationCartError({payload:err})
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

