import { Component, OnInit, Input } from '@angular/core';
import { Vihicle } from '../shared/models/vehicle.model';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  constructor() { }
  @Input() car: Vihicle;
  ngOnInit() {
  }

}
