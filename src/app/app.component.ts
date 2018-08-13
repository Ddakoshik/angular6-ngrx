import { Component, OnInit } from '@angular/core';
import { Vehicle, Vehicles } from './shared/models/vehicle.model';
import { Store } from '../../node_modules/@ngrx/store';
import { AppState } from './shared/redux/app.state';
import { Observable } from '../../node_modules/rxjs';
import { AddCar, DeleteCar, EditCar } from './shared/redux/cars.action';
import { ModalDismissReasons, NgbModal } from '../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular6-ngrx';
  public Vehicles: Vehicle[] = [];
  public carState: Observable<Vehicles>;
  selected$: Observable<Vehicle>;
  closeResult: string;


  constructor(private store: Store<Vehicles>, private modalService: NgbModal) {}


  ngOnInit() {
    this.carState = this.store.select('carPage');
    this.selected$ =  this.store.select('carPage.selectedCar');
  }


  onAdd(car: Vehicle) {
    this.store.dispatch(new AddCar(car));
  }
  onDeleteCar(car: Vehicle) {
    this.store.dispatch(new DeleteCar(car));
  }
  onEditCar(car: Vehicle) {
    this.store.dispatch(new EditCar(car));
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
