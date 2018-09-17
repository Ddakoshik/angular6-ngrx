import { Component, OnInit } from '@angular/core';
import { Vehicle, Vehicles } from './shared/models/vehicle.model';
import { Store } from '../../node_modules/@ngrx/store';
import { AppState } from './shared/redux/app.state';
import { Observable } from '../../node_modules/rxjs';
import { AddCar, DeleteCar, EditCar, LoadCars } from './shared/redux/cars.action';
import { ModalDismissReasons, NgbModal } from '../../node_modules/@ng-bootstrap/ng-bootstrap';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EditCarComponent } from './edit-car/edit-car.component';
import { selectFeature, selectCars } from './shared/redux/cars.reducer';
import { CarsService } from './shared/service/cars.service';

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
              private carservice: CarsService,
              private ngxmodalService: BsModalService) {}


  ngOnInit() {
    this.carState = this.store.select(selectFeature);
    this.cars = this.store.select(selectCars);
    this.loadCars();
  }
  loadCars() {
    this.store.dispatch(new LoadCars());
  }


  onAdd(car: Vehicle) {
    this.carservice.addCar(car);
  }
  onDeleteCar(car: Vehicle) {
    this.carservice.deleteCar(car);
  }
  onEditCar(car: Vehicle) {
    this.store.dispatch(new EditCar(car));
    this.modalRef = this.ngxmodalService.show(EditCarComponent, {
      class: 'modal-dialog-centered',
      animated: false
    });
  }
}
