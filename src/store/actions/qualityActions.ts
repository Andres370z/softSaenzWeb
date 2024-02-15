import { createAction, props } from "@ngrx/store";

// getReservationCartService
export const loadingQuality = createAction('[Quality] loadingQuality');
export const dataQualitySucess = createAction('[Quality] setQuality',props<{ Quality: any[]}>());
export const qualityError = createAction('[Quality] QualityError',props<{payload: any}>());
//postReservationCartService
export const loadingCreateQuality = createAction('[Quality] loadingCreateQuality', props<{item: any}>());
export const dataCreateQualitySucess = createAction('[Quality] setCreateQuality',props<{ Quality: any}>());
export const CreateQualityError = createAction('[Quality] QualityError',props<{payload: any}>());