import { Dispatch, SetStateAction } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IConfig {
    width: number;
    height: number;
    backgroundColor: number | string;
    autoStart?: boolean;
    antialias?: boolean;
    transparent?: boolean;
    resolution?: number;
}
export type mineStateType = "UNKNOWN" | "SUCCESS" | "FAIL" | "NOMINE" | "MINE"
export type tweenType = {
    object: object,
    property: string,
    propertyBeginValue: number,
    target: number,
    time: number,
    easing: (t: number) => number,
    change: ((t: any) => Promise<void>) | null,
    complete: ((t: any) => Promise<void>) | null,
    start: number,
}
export type storeDataType = {
    mineCount: number
}
export type storeType = {
    params: storeDataType,
    setParams: Dispatch<SetStateAction<storeDataType>>
}