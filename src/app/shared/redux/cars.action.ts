import { Action } from '@ngrx/store';
import { Vehicle } from '../models/vehicle.model';

export namespace CAR_ACTION {
    export const LOAD_CAR = 'LOAD_CAR';
    export const LOAD_CAR_AFTER_EFFECT = 'LOAD_CAR_AFTER_EFFECT';
    export const LOAD_CAR_AFTER_EFFECT_ERROR = 'LOAD_CAR_AFTER_EFFECT_ERROR';
    export const ADD_CAR = 'ADD_CAR';
    export const ADD_CAR_AFTER_EFFECT = 'ADD_CAR_AFTER_EFFECT';
    export const ADD_CAR_AFTER_EFFECT_ERROR = 'ADD_CAR_AFTER_EFFECT_ERROR';
    export const EDIT_CAR = 'EDIT_CAR';
    export const EDIT_CAR_AFTER_EFFECT = 'EDIT_CAR_AFTER_EFFECT';
    export const EDIT_CAR_AFTER_EFFECT_ERROR = 'EDIT_CAR_AFTER_EFFECT_ERROR';
    export const DELETE_CAR = 'DELETE_CAR';
    export const DELETE_CAR_AFTER_EFFECT = 'DELETE_CAR_AFTER_EFFECT';
    export const DELETE_CAR_AFTER_EFFECT_ERROR = 'DELETE_CAR_AFTER_EFFECT_ERROR';

    export const EDIT_CAR_SEND_DATA_IN_MODAL = 'EDIT_CAR_SEND_DATA_IN_MODAL';
}

export class LoadCars implements Action {
    readonly type = CAR_ACTION.LOAD_CAR;
}
export class LoadCarsAfterEffect implements Action {
    readonly type = CAR_ACTION.LOAD_CAR_AFTER_EFFECT;

    constructor(public payload: Vehicle) {}
}
export class LoadCarsAfterEffectError implements Action {
    readonly type = CAR_ACTION.LOAD_CAR_AFTER_EFFECT_ERROR;

    constructor(public payload: Vehicle) {}
}
export class AddCar implements Action {
    readonly type = CAR_ACTION.ADD_CAR;

    constructor(public payload: Vehicle) {}
}
export class AddCarAfterEffect implements Action {
    readonly type = CAR_ACTION.ADD_CAR_AFTER_EFFECT;

    constructor(public payload: Vehicle) {}
}
export class AddCarAfterEffectError implements Action {
    readonly type = CAR_ACTION.ADD_CAR_AFTER_EFFECT_ERROR;

    constructor(public payload: Vehicle) {}
}
export class EditCar implements Action {
    readonly type = CAR_ACTION.EDIT_CAR;

    constructor(public payload: Vehicle) {}
}
export class EditCarAfterEffect implements Action {
    readonly type = CAR_ACTION.EDIT_CAR_AFTER_EFFECT;

    constructor(public payload: Vehicle) {}
}
export class EditCarAfterEffectError implements Action {
    readonly type = CAR_ACTION.EDIT_CAR_AFTER_EFFECT_ERROR;

    constructor(public payload: Vehicle) {}
}
export class DeleteCar implements Action {
    readonly type = CAR_ACTION.DELETE_CAR;

    constructor(public payload: Vehicle) {}
}
export class DeleteCarAfterEffect implements Action {
    readonly type = CAR_ACTION.DELETE_CAR_AFTER_EFFECT;

    constructor(public payload: Vehicle) {}
}
export class DeleteCarAfterEffectError implements Action {
    readonly type = CAR_ACTION.DELETE_CAR_AFTER_EFFECT_ERROR;

    constructor(public payload: Vehicle) {}
}






export class EditCarSendDataInModal implements Action {
    readonly type = CAR_ACTION.EDIT_CAR_SEND_DATA_IN_MODAL;

    constructor(public payload: Vehicle) {}
}

export type CarsAction = AddCar | DeleteCar | EditCar | EditCarSendDataInModal | LoadCars |
LoadCarsAfterEffect | LoadCarsAfterEffectError | AddCarAfterEffect | AddCarAfterEffectError |
EditCarAfterEffect | EditCarAfterEffectError | DeleteCarAfterEffect | DeleteCarAfterEffectError;
