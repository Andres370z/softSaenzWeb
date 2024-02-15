import { createAction, props } from "@ngrx/store";
import { Detail } from "../models/detailModels";

export const loadingDetail = createAction('[Detail] Is Detail', props<{token: string}>());
export const dataDetailSuccess = createAction('[Detail] Data Detail',props<{data: Detail}>());
export const detailError = createAction('[Detail] Detail Error',props<{payload: any}>());