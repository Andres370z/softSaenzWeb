import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as booking from '../../actions'
import { mergeMap } from "rxjs/operators";
import { BookingService } from "src/app/services/booking/booking.service";

@Injectable()
export class bookingEndShowEffects{
   
    booking$ = createEffect(
        () => this.action$.pipe(
            ofType(booking.loadingBookingShow),
            mergeMap(
                (data) => this.bookingService.getShow(data.item)
                .then(
                    (user: any) => {
                        return booking.dataBookingShowSucess({BookingShow: user})
                    }
                ).catch(
                    (err: any) => booking.bookingShowError({payload:err})
                )
            )
        )
    )

    constructor(
        private action$: Actions,
        private bookingService: BookingService,
    ){

    }
}

