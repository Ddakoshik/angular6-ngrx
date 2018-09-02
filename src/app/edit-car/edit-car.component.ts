import { Component, OnInit } from '@angular/core';
import { Vehicle, Vehicles } from '../shared/models/vehicle.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from '../../../node_modules/rxjs';
import { Store } from '../../../node_modules/@ngrx/store';
import { selectSelectedCar } from './../shared/redux/cars.reducer';
import { CarsService } from '../shared/service/cars.service';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  closeResult: string;
  carFormEdit: FormGroup;
  extractcar: Vehicle;
  selected$: Observable<Vehicle>;


  constructor(private modalService: BsModalService,
              private modalRef: BsModalRef,
              private carservice: CarsService,
              private store: Store<Vehicle>,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.store.select(selectSelectedCar).subscribe( data => this.extractcar = data);
    this.initForm(this.extractcar);

  }

  initForm(extractcar) {
    this.carFormEdit = this.fb.group({
      brand: [extractcar[0].brand, [Validators.required, Validators.maxLength(50)]],
      year: [extractcar[0].year, [Validators.required, Validators.min(2000), Validators.max(2018)]],
    });
  }

  onSubmitEditCarForm() {
    const controls = this.carFormEdit.controls;
    const brand = this.carFormEdit.value.brand;
    const year = this.carFormEdit.value.year;
    const millage = this.extractcar[0].millage;
    const code = this.extractcar[0].code;
    const id = this.extractcar[0].id;


    const car: Vehicle = {
      brand,
      year,
      code ,
      millage,
      id
      };

    /** Проверяем форму на валидность */
    if (this.carFormEdit.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      console.log('заполните все поля');
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

        /** Прерываем выполнение метода*/
        return;
      } else {

        this.carservice.editCar(car);
        this.modalRef.hide();
      }
    console.log('123123');
  }
}
