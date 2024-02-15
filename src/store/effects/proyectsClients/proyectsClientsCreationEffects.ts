import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as auth from '../../actions'
import { mergeMap } from "rxjs/operators";
import { Detail } from "../../models/detailModels";
import { ProyectsClientsService } from "src/app/services/proyectsclients/proyects-clients.service";

@Injectable()
export class proyectsClientsCreationEffects{
   
    proyectsClients$ = createEffect(
        () => this.action$.pipe(
            ofType(auth.loadingCreateProyectsClients),
            mergeMap(
                (item) => this.proyectsClientsService.create(item.item)
                .then(
                    (user: any) => {
                        const detail=  Detail.fromApi(user)
                        return auth.dataCreateProyectsClientsSucess({ProyectsClients: detail})
                    }
                ).catch(
                    (err: any) => auth.CreateProyectsClientsError({payload:err})
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

