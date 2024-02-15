import { createReducer, on } from "@ngrx/store";
import * as proyectsClientsActions from "../actions";
import { ProyectsClients } from "../interface/proyectsClientsState";

export const proyectsClientsInitialState: ProyectsClients = {
    token:null,
    item:null,
    proyectsClients: null,
    loaded: null,
    loading: null,
    error: null
}

const _proyectsClientsReducer = createReducer(
    proyectsClientsInitialState,
    on(proyectsClientsActions.dataProyectsClientsSuccess, (state,{data}) =>({
        ...state,
        loading:false,
        loaded:true,
        proyectsClients:{...data}
        
    })),
    on(proyectsClientsActions.loadingProyectsClients,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(proyectsClientsActions.ProyectsClientsError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }
        
    })),
    on(proyectsClientsActions.dataCreateProyectsClientsSucess, (state,{ProyectsClients}) =>({
        ...state,
        loading:false,
        loaded:true,
        proyectsClients:{...ProyectsClients}
        
    })),
    on(proyectsClientsActions.loadingCreateProyectsClients,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(proyectsClientsActions.CreateProyectsClientsError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }
        
    })),
    on(proyectsClientsActions.dataProyectsClientsFullSucess, (state,{ProyectsClients}) =>({
        ...state,
        loading:false,
        loaded:true,
        proyectsClients:{...ProyectsClients}
        
    })),
    on(proyectsClientsActions.loadingProyectsClientsFull,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(proyectsClientsActions.ProyectsClientsFullError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
            status: payload.status,
        }
        
    }))
)

export function proyectsClientsReducer(state, action){
    return _proyectsClientsReducer(state, action);
}