import { Action } from '@ngrx/store';
import { Vihicle } from '../models/vehicle.model';
import { CAR_ACTION, AddCar } from './cars.action';

const initialState = {
    cars: [
        new Vihicle('Ford', 2014, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 300, 1),
        new Vihicle('Audi', 2002, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 200, 2),
        new Vihicle('Fiat', 2010, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 150, 3)
    ]
};

export function carsReducer (state = initialState, action: AddCar) {
    switch (action.type) {
        case CAR_ACTION.ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            };
        default:
            return state;
    }
}
