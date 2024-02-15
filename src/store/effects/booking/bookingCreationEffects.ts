import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as booking from '../../actions'
import { mergeMap } from "rxjs/operators";
import { BookingService } from "src/app/services/booking/booking.service";

@Injectable()
export class bookingCreationEffects{
   
    booking$ = createEffect(
        () => this.action$.pipe(
            ofType(booking.loadingCreateBooking),
            mergeMap(
                (data) => this.bookingService.create(data.item)
                .then(
                    (user: any) => {
                        return booking.dataCreateBookingSucess({Booking: user})
                    }
                ).catch(
                    (err: any) => booking.CreateBookingError({payload:err})
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

