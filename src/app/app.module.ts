import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from './shared/redux/cars.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CarsService } from './shared/service/cars.service';
import { EffectsModule } from '../../node_modules/@ngrx/effects';
import { CarsEffect } from './shared/redux/cars.effect';
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
    HttpClientModule,
    ModalModule.forRoot(),
    StoreModule.forRoot({carPage: carsReducer}),
    EffectsModule.forRoot([CarsEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    }),
    NgbModule.forRoot()
  ],
  providers: [CarsService],
  bootstrap: [AppComponent],
  entryComponents: [EditCarComponent]
})
export class AppModule { }
