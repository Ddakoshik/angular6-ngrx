import { Component, OnInit } from '@angular/core';
import { Vihicle, Vihicles } from './shared/models/vehicle.model';
import { Store } from '../../node_modules/@ngrx/store';
import { AppState } from './shared/redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular6-ngrx';
  public vihicles: Vihicle[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('carPage').subscribe(d => {
      console.log(d);
    });
  }
  onAdd(car: Vihicle) {
    car.id = this.vihicles.length + 1;
    this.vihicles.push(car);
  }

  onDelete(car: Vihicle) {
    this.vihicles = this.vihicles.filter(c => c.id !== car.id);
  }
}
