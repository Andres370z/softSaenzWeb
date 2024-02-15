import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as booking from '../../actions'
import { mergeMap } from "rxjs/operators";
import { BookingService } from "src/app/services/booking/booking.service";

@Injectable()
export class bookingEffects{
   
    booking$ = createEffect(
        () => this.action$.pipe(
            ofType(booking.loadingBooking),
            mergeMap(
                (data) => this.bookingService.getbookingConsult(data.item)
                .then(
                    (user: any) => {
                        return booking.dataBookingSucess({Booking: user})
                    }
                ).catch(
                    (err: any) => booking.BookingError({payload:err})
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

