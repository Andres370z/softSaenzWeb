import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as booking from '../../actions'
import { mergeMap } from "rxjs/operators";
import { BookingService } from "src/app/services/booking/booking.service";

@Injectable()
export class bookingEndDetailEffects{
   
    booking$ = createEffect(
        () => this.action$.pipe(
            ofType(booking.loadingDetailBooking),
            mergeMap(
                (data) => this.bookingService.getDetail(data.item)
                .then(
                    (user: any) => {
                        return booking.dataDetailBookingSucess({DetailBooking: user})
                    }
                ).catch(
                    (err: any) => booking.detailBookingError({payload:err})
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

