import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as auth from '../actions'
import { mergeMap } from "rxjs/operators";
import { Detail } from "../models/detailModels";
import { AuthService } from "src/app/services/auth/auth.service";

@Injectable()
export class detailEffects{
   
    detail$ = createEffect(
        () => this.action$.pipe(
            ofType(auth.loadingDetail),
            mergeMap(
                (item) => this._https.getCustomerDetail(item.token)
                .then(
                    (user: any) => {
                        const detail=  Detail.fromApi(user)
                        return auth.dataDetailSuccess({data: detail})
                    }
                ).catch(
                    (err: any) => auth.detailError({payload:err})
                )
            )
        )
    )

    constructor(
        private action$: Actions,
        private _https:AuthService,
    ){

    }
}

