import { Action } from '@ngrx/store';
import { Vehicle } from '../models/vehicle.model';

export namespace CAR_ACTION {
    export const ADD_CAR = 'ADD_CAR';
    export const DELETE_CAR = 'DELETE_CAR';
    export const EDIT_CAR = 'EDIT_CAR';
    export const SAVE_EDIT_CAR = 'SAVE_EDIT_CAR';
    export const LOAD_CAR = 'LOAD_CAR';
    export const LOAD_CAR_AFTER_EFFECT = 'LOAD_CAR_AFTER_EFFECT';
    export const LOAD_CAR_AFTER_EFFECT_ERROR = 'LOAD_CAR_AFTER_EFFECT_ERROR';
    export const ADD_CAR_AFTER_EFFECT = 'LOAD_CAR_AFTER_EFFECT';
    export const ADD_CAR_AFTER_EFFECT_ERROR = 'LOAD_CAR_AFTER_EFFECT_ERROR';
}

export class DeleteCar implements Action {
    readonly type = CAR_ACTION.DELETE_CAR;

    constructor(public payload: Vehicle) {}
}
export class EditCar implements Action {
    readonly type = CAR_ACTION.EDIT_CAR;

    constructor(public payload: Vehicle) {}
}
export class SaveEditCar implements Action {
    readonly type = CAR_ACTION.SAVE_EDIT_CAR;

    constructor(public payload: Vehicle) {}
}
export class LoadCars implements Action {
    readonly type = CAR_ACTION.LOAD_CAR;
}
export class LoadCarsAfterEffect implements Action {
    readonly type = CAR_ACTION.LOAD_CAR_AFTER_EFFECT;

    constructor(public payload) {}
}
export class LoadCarsAfterEffectError implements Action {
    readonly type = CAR_ACTION.LOAD_CAR_AFTER_EFFECT_ERROR;

    constructor(public payload) {}
}
export class AddCar implements Action {
    readonly type = CAR_ACTION.ADD_CAR;

    constructor(public payload: Vehicle) {}
}
export class AddCarAfterEffect implements Action {
    readonly type = CAR_ACTION.ADD_CAR_AFTER_EFFECT;

    constructor(public payload) {}
}
export class AddCarAfterEffectError implements Action {
    readonly type = CAR_ACTION.ADD_CAR_AFTER_EFFECT_ERROR;

    constructor(public payload) {}
}


export type CarsAction = AddCar | DeleteCar | EditCar | SaveEditCar | LoadCars |
LoadCarsAfterEffect | LoadCarsAfterEffectError | AddCarAfterEffect | AddCarAfterEffectError;
