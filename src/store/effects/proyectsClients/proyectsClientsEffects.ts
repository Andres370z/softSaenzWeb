import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import * as auth from '../../actions'
import { mergeMap } from "rxjs/operators";
import { Detail } from "../../models/detailModels";
import { ProyectsClientsService } from "src/app/services/proyectsclients/proyects-clients.service";

@Injectable()
export class proyectsClientsEffects{
   
    proyectsClients$ = createEffect(
        () => this.action$.pipe(
            ofType(auth.loadingBookingAdmin),
            mergeMap(
                (item) => this.proyectsClientsService.getProyectsClients(item.item)
                .then(
                    (user: any) => {
                        return auth.dataProyectsClientsSuccess({data: user})
                    }
                ).catch(
                    (err: any) => auth.ProyectsClientsError({payload:err})
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

