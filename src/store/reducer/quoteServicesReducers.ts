import { createReducer, on } from "@ngrx/store";
import { quoteServices } from "../interface/quoteServicesInterface";
import * as quoteServicesActions from "../actions";
export const quoteServicesInitialState: quoteServices = {
    quoteServices: null,
    loaded: null,
    loading: null,
    error: null
}

const _quoteServicesReducer = createReducer(
    quoteServicesInitialState,
    on(quoteServicesActions.dataCreateQuoteServicesSucess, (state, quoteCreateServices) =>({
        ...state,
        loading:false,
        loaded:true,
       quoteServices:quoteCreateServices
        
    })),
    on(quoteServicesActions.loadingCreateQuoteServices,  (state, { item }) =>({
        ...state,
        loading:true,
        item:item
        
    })),
    on(quoteServicesActions.quoteCreateServicesError, (state, { payload }) =>({
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

export function quoteServicesReducer(state, action){
    return _quoteServicesReducer(state, action);
}