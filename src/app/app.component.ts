import { Component, OnInit } from '@angular/core';
import { Vehicle, Vehicles } from './shared/models/vehicle.model';
import { Store } from '../../node_modules/@ngrx/store';
import { AppState } from './shared/redux/app.state';
import { Observable } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular6-ngrx';
  public Vehicles: Vehicle[] = [];
  public carState: Observable<Vehicles>;
  selected$: Observable<Vehicle>;


  constructor(private store: Store<Vehicles>) {}

  ngOnInit() {
    this.carState = this.store.select('carPage');
    this.selected$ =  this.store.select('carPage.selectedCar');
  }


  onEdit(car: Vehicle) {

  }
}
