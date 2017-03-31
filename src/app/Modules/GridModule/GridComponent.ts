import { Component, ViewEncapsulation } from '@angular/core';

import { CarService } from '../../Services';

export interface Car {
    vin?;
    year?;
    brand?;
    color?;
}

class PrimeCar implements Car {
    constructor(public vin?, public year?, public brand?, public color?) { }
}

@Component({
    moduleId: module.id,
    templateUrl: 'GridComponent.html',
    encapsulation: ViewEncapsulation.None,
    providers: [CarService]
})
export class GridComponent {
    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsMedium().map(cars => this.cars = cars).subscribe();
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        if (this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;

        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        let car = new PrimeCar();
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}