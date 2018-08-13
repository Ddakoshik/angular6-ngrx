import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { Vehicle } from '../shared/models/vehicle.model';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  closeResult: string;
  lastId: number;
  carForm: FormGroup;

  @Output() addCar = new EventEmitter<Vehicle>();

  constructor(private modalService: NgbModal,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  uniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
  }

  initForm() {
    this.carForm = this.fb.group({
      brand: ['', [Validators.required, Validators.maxLength(50)]],
      year: ['', [Validators.required, Validators.min(2000), Validators.max(2018)]],
      millage: ['', [Validators.required]]
    });
  }


  onSubmitAddNewCarForm() {
    const controls = this.carForm.controls;
    const brand = this.carForm.value.brand;
    const year = this.carForm.value.year;
    const millage = this.carForm.value.millage;
    const code = this.guid();
    const id = this.uniqueId();


    const car: Vehicle = {
      brand,
      year,
      code ,
      millage,
      id
      };

    /** Проверяем форму на валидность */
    if (this.carForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      console.log('заполните все поля');
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

        /** Прерываем выполнение метода*/
        return;
      } else {

        this.addCar.emit(car);
        this.carForm.reset();
      }

  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
