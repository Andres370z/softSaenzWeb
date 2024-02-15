import { createAction, props } from "@ngrx/store";
import { Auth } from "../interface/authInterface";

export const loadingUsers = createAction('[Auth] loadingUsers', props<{item: any}>());
export const dataUsersSucess = createAction('[Auth] setUsers',props<{ users: Auth}>());
export const usersError = createAction('[Auth] usersError',props<{payload: any}>());