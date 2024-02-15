import { createReducer, on } from "@ngrx/store";
import * as qualityActions from "../actions";
import { Quality } from "../interface/qualityState";

export const qualityInitialState: Quality = {
    token:null,
    item:null,
    quality: null,
    loaded: null,
    loading: null,
    qualityCheck:0,
    error: null
}

const _qualityReducer = createReducer(
    qualityInitialState,
    on(qualityActions.dataQualitySucess, (state,{Quality}) =>({
        ...state,
        loading:false,
        loaded:true,
        qualityCheck:1,
       quality:Quality
        
    })),
    on(qualityActions.loadingQuality,  (state) =>({
        ...state,
        loading:true,
        
    })),
    on(qualityActions.qualityError, (state, { payload }) =>({
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

export function qualityReducer(state, action){
    return _qualityReducer(state, action);
}