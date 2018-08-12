import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    ListCarsComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
