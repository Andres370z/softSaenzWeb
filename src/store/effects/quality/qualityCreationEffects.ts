import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as quality from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateQualitiesService } from "src/app/services/qualities/create-qualities.service";

@Injectable()
export class qualityCreationEffects{
   
    quality$ = createEffect(
        () => this.action$.pipe(
            ofType(quality.loadingCreateQuality),
            mergeMap(
                (data) => this.qualitiesService.create(data.item)
                .then(
                    (user: any) => {
                        return quality.dataCreateReservationCartSucess({ReservationCart: user})
                    }
                ).catch(
                    (err: any) => quality.CreateReservationCartError({payload:err})
                )
            )
        )
    )

    constructor(
        private action$: Actions,
        private qualitiesService:CreateQualitiesService,
    ){

    }
}

