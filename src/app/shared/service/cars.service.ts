import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../redux/app.state';
import { map } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle.model';
import { LoadCars, AddCar, DeleteCar, EditCar, SaveEditCar } from '../redux/cars.action';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient,
              private store: Store<AppState>  ) { }

  // loadCars(): void {
  //   this.http.get(CarsService.BASE_URL + 'cars').subscribe((data: Vehicle[]) => {
  //     this.store.dispatch(new LoadCars(data));
  //   });
  // }

  loadCarsEffect() {
    return this.http.get(CarsService.BASE_URL + 'cars');
  }

  addCar(car: Vehicle) {
    return this.http.post(CarsService.BASE_URL + 'cars', car);
  }
  editCar(car: Vehicle) {
    this.http.put(CarsService.BASE_URL + 'cars/' +  car.id, car).subscribe(
      res => {
        this.store.dispatch(new SaveEditCar(car));
      },
      err => {
        console.log('Error edit car');
      }
    );
  }
  deleteCar(car: Vehicle ) {
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id).subscribe(
      res => {
        console.log(res);
        this.store.dispatch(new DeleteCar(car));
      },
      err => {
        console.log('Error delete car');
      }
    );
  }
}
