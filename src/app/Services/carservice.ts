import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

export interface Car {
    vin?;
    year?;
    brand?;
    color?;
}

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCarsMedium() : Observable<Car[]> {
        return this.http.get('../../app/Data/cars.json')
        .map((res:Response)=><Car[]> res.json().data);
    }
}