import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as auth from '../../actions'
import { mergeMap } from "rxjs/operators";
import { Detail } from "../../models/detailModels";
import { ProyectsClientsService } from "src/app/services/proyectsclients/proyects-clients.service";

@Injectable()
export class proyectsClientsFullEffects{
   
    proyectsClients$ = createEffect(
        () => this.action$.pipe(
            ofType(auth.loadingProyectsClientsFull),
            mergeMap(
                (item) => this.proyectsClientsService.getProyectsClientsFull()
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
        private proyectsClientsService:ProyectsClientsService,
    ){

    }
}

