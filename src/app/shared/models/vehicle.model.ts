export class Vihicle {
    constructor(
        public brand: string,
        public year: number,
        public code: string,
        public millage: number,
        public id?: number,
    ) {}
}

export interface Vihicles {
    vihiclesdata: Vihicle [];
}
