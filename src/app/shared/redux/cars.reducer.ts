import { Action } from '@ngrx/store';
import { Vehicle } from '../models/vehicle.model';
import { CAR_ACTION, CarsAction } from './cars.action';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const initialState = {
    cars: [
        new Vehicle('Ford', 2014, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 300, '0'),
        new Vehicle('Audi', 2002, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 200, '1'),
        new Vehicle('Fiat', 2010, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 150, '2')
    ],
    selectedCar: [
        new Vehicle('Fiat', 2018, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 150, '2')
    ]
};

export function carsReducer (state = initialState, action: CarsAction) {
    switch (action.type) {
        case CAR_ACTION.ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            };
        case CAR_ACTION.DELETE_CAR:
            return {
                ...state,
                cars: [...state.cars.filter(c => c.id !== action.payload.id)]
            };
        case CAR_ACTION.EDIT_CAR:
        const car = state.cars.filter(c => c.id === action.payload.id);
            return{
                ...state,
                selectedCar: car
            };
        default:
            return state;
    }
}




export const selectFeature = createFeatureSelector<any>(
    'carPage'
);
export const selectCars = createSelector(
    selectFeature,
    (state) => {
      return state.cars;
    }
);
export const selectSelectedCar = createSelector(
    selectFeature,
    (state) => {
      return state.selectedCar;
    }
);
