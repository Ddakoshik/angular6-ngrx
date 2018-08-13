import { Vihicle } from '../models/vehicle.model';

export interface AppState {
    carPage: {
        cars: Vihicle[]
    };
}
