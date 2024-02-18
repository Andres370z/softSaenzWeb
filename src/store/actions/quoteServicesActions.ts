import { createAction, props } from "@ngrx/store";

export const loadingQuoteServices = createAction('[QuoteServices] loadingQuoteServices', props<{item: string}>());
export const dataQuoteServicesSucess = createAction('[QuoteServices] setQuoteServices',props<{ quoteServices: any}>());
export const quoteServicesError = createAction('[QuoteServices] quoteServicesError',props<{payload: any}>());

export const loadingCreateQuoteServices = createAction('[QuoteServices] loadingQuoteServices', props<{item: any}>());
export const dataCreateQuoteServicesSucess = createAction('[QuoteServices] setQuoteServices',props<{ quoteCreateServices: any}>());
export const quoteCreateServicesError = createAction('[QuoteServices] quoteServicesError',props<{payload: any}>());