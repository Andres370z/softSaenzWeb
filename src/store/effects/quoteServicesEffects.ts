import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as auth from '../actions'
import { mergeMap } from "rxjs/operators";
import { Authorisation } from "../models/authorisationModels";
import { Auth } from "../interface/authInterface";
import { AuthService } from "src/app/services/auth/auth.service";
import { QuoteServicesService } from "src/app/services/quoteServices/quote-services.service";

@Injectable()
export class quoteServicesEffects{
    
    auth$ = createEffect(
        () => this.action$.pipe(
            ofType(auth.loadingCreateQuoteServices),
            mergeMap(
                (item) => this._https.createQuoteServices(item.item)
                .then(
                    (user: any) => {
                        return auth.dataCreateQuoteServicesSucess({quoteCreateServices: user})
                    }
                ).catch(
                    (err: any) => auth.quoteCreateServicesError({payload:err})
                )
            )
        )
    )
    constructor(
        private action$: Actions,
        private _https:QuoteServicesService,
    ){

    }
}
