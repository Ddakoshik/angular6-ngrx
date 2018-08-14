import { Component, OnInit } from '@angular/core';
import { Vehicle, Vehicles } from '../shared/models/vehicle.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from '../../../node_modules/rxjs';
import { Store } from '../../../node_modules/@ngrx/store';



@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  editCar: Observable<Vehicles>;
  closeResult: string;
  carForm: FormGroup;


  selected$: Observable<Vehicle>;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,
              private store: Store<Vehicles>) {}

  ngOnInit() {
    this.editCar = this.store.select(selectSelectedCar);
  }


}
