import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as booking from '../../actions'
import { mergeMap } from "rxjs/operators";
import { BookingService } from "src/app/services/booking/booking.service";

@Injectable()
export class bookingEndEffects{
   
    booking$ = createEffect(
        () => this.action$.pipe(
            ofType(booking.loadingEditBooking),
            mergeMap(
                (data) => this.bookingService.editBooking(data.id , data.item)
                .then(
                    (user: any) => {
                        return booking.dataEditBookingSucess({EditBooking: user})
                    }
                ).catch(
                    (err: any) => booking.editBookingError({payload:err})
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

