import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../redux/app.state';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Vehicle } from '../models/vehicle.model';
import { LoadCars } from '../redux/cars.action';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient,
              private store: Store<AppState>  ) { }

  loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars')
    .map((response: Response) => response.json())
    .toPromise()
    .then((cars: Vehicle[]) => {
      this.store.dispatch(new LoadCars(cars));
    });
  }
}
