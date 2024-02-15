import { createAction, props } from "@ngrx/store";


export const loadingProyectsClients = createAction('[ProyectsClients] Is ProyectsClients', props<{token: string}>());
export const dataProyectsClientsSuccess = createAction('[ProyectsClients] Data ProyectsClients',props<{data: any}>());
export const ProyectsClientsError = createAction('[ProyectsClients] ProyectsClients Error',props<{payload: any}>());
//createProyectsClients
export const loadingCreateProyectsClients = createAction('[ProyectsClients] loadingcreateProyectsClients', props<{item: any}>());
export const dataCreateProyectsClientsSucess = createAction('[ProyectsClients] setcreateProyectsClients',props<{ ProyectsClients: any}>());
export const CreateProyectsClientsError = createAction('[ProyectsClients] createProyectsClientsError',props<{payload: any}>());
//ProyectsClientsFull
export const loadingProyectsClientsFull = createAction('[ProyectsClientsFull] loadingProyectsClientsFull', props<{item: string}>());
export const dataProyectsClientsFullSucess = createAction('[ProyectsClientsFull] setProyectsClientsFull',props<{ ProyectsClients: any}>());
export const ProyectsClientsFullError = createAction('[ProyectsClientsFull] ProyectsClientsFullError',props<{payload: any}>());

