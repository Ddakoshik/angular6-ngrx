import { Injectable } from '@angular/core';
// import { Actions, Effect } from '@ngrx/effects';
import { CAR_ACTION } from './cars.action';
import { CarsService } from '../service/cars.service';
import { map, switchMap, catchError } from 'rxjs/operators';


@Injectable()
export class CarsEffect {

    constructor(
        // private actions$: Actions,
        private service: CarsService
    ) {}

    // @Effect() addcars = this.actions$.ofType(CAR_ACTION.ADD_CAR).pipe(
    //     switchMap(() => {
    //         return this.service.addCar()
    //     })
    // )

}
