import { createReducer, on } from "@ngrx/store";
import { dataUsersSucess, loadingUsers, usersError } from "../actions";
import { authEnd } from "../interface/authEndInterface";

export const authInitialState: authEnd = {
    item:null,
    auth: null,
    loaded: null,
    loading: null,
    error: null
}

const _authReducer = createReducer(
    authInitialState,
    on(dataUsersSucess, (state,{users}) =>({
        ...state,
        loading:false,
        loaded:true,
       auth:{...users}
        
    })),
    on(loadingUsers,  (state, { item }) =>({
        ...state,
        loading:true,
        item:item
        
    })),
    on(usersError, (state, { payload }) =>({
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

export function authReducer(state, action){
    return _authReducer(state, action);
}