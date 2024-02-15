import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as auth from '../actions'
import { mergeMap } from "rxjs/operators";
import { Authorisation } from "../models/authorisationModels";
import { Users } from "../models/userModels";
import { Auth } from "../interface/authInterface";
import { AuthService } from "src/app/services/auth/auth.service";

@Injectable()
export class authEffects{
    
    auth$ = createEffect(
        () => this.action$.pipe(
            ofType(auth.loadingUsers),
            mergeMap(
                (item) => this._https.login(item.item)
                .then(
                    (user: any) => {
                        const authorisation:Authorisation = Authorisation.fromApi(user.authorisation);
                        const status: string =  user.status
                        ///const users : Users = []  //Users.fromApi(user.user)
                        const data: Auth = {
                            authorisation: authorisation,
                            status: status
                        }
                        return auth.dataUsersSucess({users: data})
                    }
                ).catch(
                    (err: any) => auth.usersError({payload:err})
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
