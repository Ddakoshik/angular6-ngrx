import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  closeResult: string;

  carForm: FormGroup;


  constructor(private modalService: NgbModal,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    const uuid = this.guid();
    console.log(uuid);



    // this.carForm = new FormGroup({
    //   'name': new FormControl('', [
    //     Validators.required,
    //     Validators.maxLength(50)
    //   ])
    // });
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  initForm() {
    this.carForm = this.fb.group({
      brand: ['', [Validators.required, Validators.maxLength(50)]],
      year: ['', [Validators.required, Validators.min(2000), Validators.max(2018)]],
      millage: ['', [Validators.required]]
    });
  }
  // get name() { return this.carForm.get('name'); }

  // get power() { return this.carForm.get('power'); }

  // get alterEgo() { return this.carForm.get('alterEgo'); }
  onSubmitAddNewCarForm() {
    const controls = this.carForm.controls;
    const brand = this.carForm.value.brand;
    const year = this.carForm.value.year;
    const millage = this.carForm.value.millage;

    const newvariable = {
      brand,
      year,
      millage
      };
      console.log(newvariable);

    /** Проверяем форму на валидность */
    if (this.carForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      console.log('заполните все поля');
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

        /** Прерываем выполнение метода*/
        return;
      } else {
        console.log('all good');
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
