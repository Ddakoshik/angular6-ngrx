import { Component, OnInit } from '@angular/core';
import { Vehicle, Vehicles } from '../shared/models/vehicle.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from '../../../node_modules/rxjs';
import { Store } from '../../../node_modules/@ngrx/store';
import { selectSelectedCar } from './../shared/redux/cars.reducer';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  editCar: Observable<Vehicles>;
  closeResult: string;
  carFormEdit: FormGroup;


  selected$: Observable<Vehicle>;


  constructor(private modalService: BsModalService,
              private modalRef: BsModalRef,
              private store: Store<Vehicles>,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.editCar = this.store.select(selectSelectedCar);
    this.initForm(this.editCar);
  }

  initForm(editCar) {
    this.carFormEdit = this.fb.group({
      brand: [editCar.brand, [Validators.required, Validators.maxLength(50)]],
      year: ['', [Validators.required, Validators.min(2000), Validators.max(2018)]],
      millage: ['', [Validators.required]]
    });
  }


}
