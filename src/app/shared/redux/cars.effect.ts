import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CAR_ACTION, LoadCarsAfterEffect, LoadCarsAfterEffectError, AddCar } from './cars.action';
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
                .loadCarsEffect()
                .pipe(
                    map(movies => new LoadCarsAfterEffect(movies)),
                    catchError(error => of(new LoadCarsAfterEffectError(error)))
                );
        })
    );
    @Effect() addCar = this.actions$.ofType(CAR_ACTION.ADD_CAR).pipe(
        switchMap((action: AddCar) => {
            return this.service
                .addCar(action.payload)
                .pipe(
                    map(car => new LoadCarsAfterEffect(car)),
                    catchError(error => of(new LoadCarsAfterEffectError(error)))
                );
        })
    );

}
