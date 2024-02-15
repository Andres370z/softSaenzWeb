import { createReducer, on } from "@ngrx/store";
import { dataDetailSuccess, detailError, loadingDetail} from "../actions";
import { Details } from "../interface/detailState";

export const detailInitialState: Details = {
    token: null,
    detail: null,
    loaded: null,
    loading:null,
    error:null
}

const _detailReducer = createReducer(
    detailInitialState,
    on(loadingDetail, (state, { token }) =>({
        ...state,
       loading:true,
       token: token,
       error: null
        
    })),
    on(dataDetailSuccess, (state, {data}) =>({
        ...state,
        loading:false,
        loaded:true,
        detail:{ ...data },
        error: null
    })),
    on(detailError, (state, { payload }) =>({
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

export function detailReducer(state, action){
    return _detailReducer(state, action);
}