import { Action } from '@ngrx/store';
import { Vehicle } from '../models/vehicle.model';
import { CAR_ACTION, CarsAction } from './cars.action';
import { createSelector, createFeatureSelector } from '@ngrx/store';

const initialState = {
    cars: [
    ],
    selectedCar: [
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
        case CAR_ACTION.SAVE_EDIT_CAR:
            return{
                ...state,
                cars: [...state.cars.map( data => {
                    action.payload.id = data;
                })]
            };
        case CAR_ACTION.LOAD_CAR:
            return {
                ...state,
                cars: [...action.payload]
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
