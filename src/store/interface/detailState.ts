import { Detail } from "../models/detailModels";

export interface Details{
    token:string,
    detail: Detail,
    loaded: boolean,
    loading: boolean,
    error: any
}