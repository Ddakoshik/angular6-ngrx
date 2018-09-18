import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CAR_ACTION,
    LoadCarsAfterEffect,
    LoadCarsAfterEffectError,
    AddCar,
    EditCar,
    AddCarAfterEffect,
    AddCarAfterEffectError,
    EditCarAfterEffect,
    EditCarAfterEffectError,
    DeleteCarAfterEffectError,
    DeleteCarAfterEffect,
    DeleteCar} from './cars.action';
import { CarsService } from '../service/cars.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';


@Injectable()
export class CarsEffect {

    constructor(
        private actions$: Actions,
        private service: CarsService
    ) {}

    @Effect() loadCar = this.actions$.ofType(CAR_ACTION.LOAD_CAR).pipe(
        switchMap(() => {
            return this.service
                .loadCars()
                .pipe(
                    map((movies: Vehicle) => new LoadCarsAfterEffect(movies)),
                    catchError(error => of(new LoadCarsAfterEffectError(error)))
                );
        })
    );
    @Effect() addCar = this.actions$.ofType(CAR_ACTION.ADD_CAR).pipe(
        switchMap((action: AddCar) => {
            return this.service
                .addCar(action.payload)
                .pipe(
                    map((car: Vehicle) => new AddCarAfterEffect(car)),
                    catchError(error => of(new AddCarAfterEffectError(error)))
                );
        })
    );
    @Effect() editCar = this.actions$.ofType(CAR_ACTION.EDIT_CAR).pipe(
        switchMap((action: EditCar) => {
            return this.service
                .editCar(action.payload)
                .pipe(
                    map((car: Vehicle) => new EditCarAfterEffect(car)),
                    catchError(error => of(new EditCarAfterEffectError(error)))
                );
        })
    );
    @Effect() deleteCar = this.actions$.ofType(CAR_ACTION.DELETE_CAR).pipe(
        switchMap((action: DeleteCar) => {
            return this.service
                .deleteCar(action.payload)
                .pipe(
                    map((car: Vehicle) => new DeleteCarAfterEffect(car)),
                    catchError(error => of(new DeleteCarAfterEffectError(error)))
                );
        })
    );

}
