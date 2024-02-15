import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as booking from '../../actions'
import { mergeMap } from "rxjs/operators";
import { BookingService } from "src/app/services/booking/booking.service";

@Injectable()
export class bookingAdminEffects{
   
    booking$ = createEffect(
        () => this.action$.pipe(
            ofType(booking.loadingBookingAdmin),
            mergeMap(
                (data) => this.bookingService.createDetail(data.item)
                .then(
                    (user: any) => {
                        return booking.dataBookingAdminSucess({BookingAdmin: user})
                    }
                ).catch(
                    (err: any) => booking.bookingAdminError({payload:err})
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

