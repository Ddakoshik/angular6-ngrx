import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../redux/app.state';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient,
              private store: Store<AppState>  ) { }


  loadCars() {
    return this.http.get(CarsService.BASE_URL + 'cars');
  }
  addCar(car: Vehicle) {
    return this.http.post(CarsService.BASE_URL + 'cars', car);
  }
  editCar(car: Vehicle) {
    return this.http.put(CarsService.BASE_URL + 'cars/' +  car.id, car);
  }
  deleteCar(car: Vehicle ) {
    return this.http.delete(CarsService.BASE_URL + 'cars/' + car.id);
  }
}
