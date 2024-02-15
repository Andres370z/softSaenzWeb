import { Auth } from "./authInterface"

export interface authEnd{
    item:any,
    auth: Auth,
    loaded: boolean,
    loading: boolean,
    error: any
}