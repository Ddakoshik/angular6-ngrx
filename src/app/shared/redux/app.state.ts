import { Vehicle } from '../models/vehicle.model';

export interface AppState {
    carPage: {
        cars: Vehicle[];
        selectedCar: Vehicle;
    };
}
