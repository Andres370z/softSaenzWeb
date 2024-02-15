import { createReducer, on } from "@ngrx/store";
import * as wayToPayActions from "../actions";
import { WayToPay } from "../interface/wayToPayState";

export const wayToPayInitialState: WayToPay = {
    token:null,
    item:null,
    wayToPay: null,
    loaded: null,
    loading: null,
    wayToPayCheck:0,
    error: null
}

const _wayToPayReducer = createReducer(
    wayToPayInitialState,
    on(wayToPayActions.dataWayToPaySucess, (state,{WayToPay}) =>({
        ...state,
        loading:false,
        loaded:true,
        wayToPayCheck:1,
        wayToPay:WayToPay
        
    })),
    on(wayToPayActions.loadingWayToPay,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(wayToPayActions.wayToPayError, (state, { payload }) =>({
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
    on(wayToPayActions.dataCreateWayToPaySucess, (state,{WayToPay}) =>({
        ...state,
        loading:false,
        loaded:true,
        wayToPayCheck:2,
        wayToPay:WayToPay
        
    })),
    on(wayToPayActions.loadingCreateWayToPay,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(wayToPayActions.CreateWayToPayError, (state, { payload }) =>({
        ...state,
        loading:false,
        loaded:true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.error.message,
            status: payload.status,
        }
        
    }))
)

export function wayToPayReducer(state, action){
    return _wayToPayReducer(state, action);
}