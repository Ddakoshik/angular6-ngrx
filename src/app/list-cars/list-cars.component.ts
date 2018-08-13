import { Component, OnInit, Input } from '@angular/core';
import { Vihicle } from '../shared/models/vehicle.model';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/redux/app.state';
import { DeleteCar } from '../shared/redux/cars.action';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  constructor( private store: Store<AppState>) { }
  @Input() car: Vihicle;

  ngOnInit() {
  }

  onEdit() {

  }
  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }
}
