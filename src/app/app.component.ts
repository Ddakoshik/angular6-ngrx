import { Component, OnInit } from '@angular/core';
import { Vehicle, Vehicles } from './shared/models/vehicle.model';
import { Store } from '../../node_modules/@ngrx/store';
import { AppState } from './shared/redux/app.state';
import { Observable } from '../../node_modules/rxjs';
import { AddCar, DeleteCar, EditCar } from './shared/redux/cars.action';
import { ModalDismissReasons, NgbModal } from '../../node_modules/@ng-bootstrap/ng-bootstrap';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditCarComponent } from './edit-car/edit-car.component';
import { selectFeature, selectCars } from './shared/redux/cars.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular6-ngrx';
  public Vehicles: Vehicle[] = [];
  public carState: Observable<Vehicles>;
  public cars: Observable<Vehicles>;
  public editCar: Observable<Vehicles>;

  closeResult: string;
  modalRef: BsModalRef;

  constructor(private store: Store<Vehicles>,
              private modalService: NgbModal,
              private ngxmodalService: BsModalService) {}


  ngOnInit() {
    this.carState = this.store.select(selectFeature);
    this.cars = this.store.select(selectCars);
  }


  onAdd(car: Vehicle) {
    this.store.dispatch(new AddCar(car));
  }
  onDeleteCar(car: Vehicle) {
    this.store.dispatch(new DeleteCar(car));
  }
  onEditCar(car: Vehicle) {
    this.store.dispatch(new EditCar(car));
    this.modalRef = this.ngxmodalService.show(EditCarComponent);
  }
}
