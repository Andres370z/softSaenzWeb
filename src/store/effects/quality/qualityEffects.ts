import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as quality from '../../actions'
import { mergeMap } from "rxjs/operators";
import { CreateQualitiesService } from "src/app/services/qualities/create-qualities.service";

@Injectable()
export class qualityEffects{
   
    quality$ = createEffect(
        () => this.action$.pipe(
            ofType(quality.loadingQuality),
            mergeMap(
                () => this.qualitiesService.getQuality()
                .then(
                    (user: any) => {
                        return quality.dataQualitySucess({Quality: user})
                    }
                ).catch(
                    (err: any) => quality.qualityError({payload:err})
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

