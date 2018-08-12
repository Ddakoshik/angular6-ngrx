import { Component, OnInit, Input, Output } from '@angular/core';
import { Vihicle } from '../shared/models/vehicle.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  constructor() { }
  @Input() car: Vihicle;
  @Output() deleteCar = new EventEmitter<Vihicle>();

  ngOnInit() {
  }

  onEdit() {

  }
  onDelete() {
    this.deleteCar.emit(this.car);
  }
}
