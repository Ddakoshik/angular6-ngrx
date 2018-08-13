import { Component, OnInit } from '@angular/core';
import { Vihicle, Vihicles } from './shared/models/vehicle.model';
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
  public vihicles: Vihicle[] = [];
  public carState: Observable<Vihicles>;


  constructor(private store: Store<Vihicles>) {}

  ngOnInit() {
    this.carState = this.store.select('carPage');
  }


  onEdit(car: Vihicle) {

  }
}
