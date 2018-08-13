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
  lastId: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('carPage').subscribe(({cars}) => {
      this.vihicles = cars;
      this.lastId = this.vihicles.length;
    });
    console.log('oninit', this.lastId);
  }
  onAdd(car: Vihicle) {
    car.id = ++this.lastId;
    console.log(this.lastId);
    this.vihicles.push(car);
  }

  onDelete(car: Vihicle) {
    this.vihicles = this.vihicles.filter(c => c.id !== car.id);
  }

  onEdit(car: Vihicle) {

  }
}
