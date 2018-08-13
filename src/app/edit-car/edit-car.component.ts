import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../shared/models/vehicle.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { NgbModal, ModalDismissReasons } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Store } from '../../../node_modules/@ngrx/store';
import { AppState } from '../shared/redux/app.state';
import { EditCar } from '../shared/redux/cars.action';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  todos: Vehicle[] = [];
  closeResult: string;
  lastId: number;
  carForm: FormGroup;

  constructor(private modalService: NgbModal,
    private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit() {
  }


  updateTodoById(id: string, values: Object = {}) {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getTodoById(id: string) {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
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
    const code = '';
    const id = '';
    console.log(id);

    const car: Vehicle = {
      brand,
      year,
      code ,
      millage,
      id
      };
      console.log(car);

    /** Проверяем форму на валидность */
    if (this.carForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      console.log('заполните все поля');
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

        /** Прерываем выполнение метода*/
        return;
      } else {
        // this.addCar.emit(car);

        this.store.dispatch(new EditCar(car));
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
