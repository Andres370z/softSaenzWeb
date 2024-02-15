import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as booking from '../../actions'
import { mergeMap } from "rxjs/operators";
import { BookingService } from "src/app/services/booking/booking.service";

@Injectable()
export class bookingConsultFullEffects{
   
    booking$ = createEffect(
        () => this.action$.pipe(
            ofType(booking.loadingBookingConsultFull),
            mergeMap(
                (data) => this.bookingService.getbookingConsultFull(data.item)
                .then(
                    (user: any) => {
                        return booking.dataBookingConsultFullSucess({BookingConsultFull: user})
                    }
                ).catch(
                    (err: any) => booking.bookingConsultFullError({payload:err})
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

