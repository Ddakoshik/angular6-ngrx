import { Action } from '@ngrx/store';
import { Vihicle } from '../models/vehicle.model';

export namespace CAR_ACTION {
    export const ADD_CAR = 'ADD_CAR';
}

export class AddCar implements Action {
    readonly type = CAR_ACTION.ADD_CAR;

    constructor(public payload: Vihicle) {}
}
