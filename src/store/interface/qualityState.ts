import { Detail } from "../models/detailModels";

export interface Quality{
    token:string,
    item:any,
    quality: any[],
    loaded: boolean,
    qualityCheck: number,
    loading: boolean,
    error: any
}