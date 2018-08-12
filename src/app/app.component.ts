import { Component } from '@angular/core';
import { Vihicle, Vihicles } from './shared/models/vehicle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-ngrx';
  public vihicles: Vihicle[] = [
    new Vihicle('Ford', 2014, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 300, 1),
    new Vihicle('Audi', 2002, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 200, 2),
    new Vihicle('Fiat', 2010, 'code: e936d422-dd23-4576-97cc-35b1ae6b2209', 150, 3)
  ];
}
