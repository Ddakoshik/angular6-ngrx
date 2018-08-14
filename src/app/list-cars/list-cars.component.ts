import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from '../shared/models/vehicle.model';
import { ModalService } from '../shared/service/modal.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  constructor(private modalServ: ModalService) { }
  @Input() car: Vehicle;
  @Output() deleteCar = new EventEmitter<Vehicle>();
  @Output() editCar = new EventEmitter<Vehicle>();

  ngOnInit() {
  }

  onEdit() {
    this.editCar.emit(this.car);
  }
  onDelete() {
    this.deleteCar.emit(this.car);
  }
}
