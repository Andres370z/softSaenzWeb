import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as booking from '../../actions'
import { mergeMap } from "rxjs/operators";
import { BookingService } from "src/app/services/booking/booking.service";

@Injectable()
export class bookingEndDetailShowEffects{
   
    booking$ = createEffect(
        () => this.action$.pipe(
            ofType(booking.loadingDetailShow),
            mergeMap(
                (data) => this.bookingService.getDetailShow(data.item)
                .then(
                    (user: any) => {
                        return booking.dataDetailShowSucess({DetailShow: user})
                    }
                ).catch(
                    (err: any) => booking.detailShowError({payload:err})
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

