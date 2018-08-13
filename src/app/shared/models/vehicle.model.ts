export class Vehicle {
    constructor(
        public brand: string,
        public year: number,
        public code: string,
        public millage: number,
        public id?: string
    ) {}
}

export interface Vehicles {
    vehiclesdata: Vehicle [];
}
