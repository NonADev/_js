import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js';

export class FleetDataService {
      constructor(){
            this.cars = [];
            this.drones = [];
            this.errors = [];
      }
      loadData(fleet){
            for (let data of fleet) {
                  switch (data.type) {
                        case 'car':
                              if(this.validateCarData(data)){
                                    let car = this.loadCar(data);
                                    this.cars.push(car);
                              }
                              else{
                                    this.errors.push(new DataError('invalid car data', data));
                              }
                              break;
                        case 'drone':
                              if(this.validateDroneData(data)){
                                    let drone = this.loadDrone(data);
                                    this.drones.push(drone);
                              }
                              else{
                                    this.errors.push(new DataError('invalid drone data', data));
                              }
                              break;
                        default:
                              let err = new DataError('Invalid vehicle type', data);
                              this.errors.push(err);
                              break;
                  }
            }
      }
      loadCar(car) {
            try{
                  let c = new Car(car.license, car.model, car.latLong);
                  c.miles = car.miles;
                  c.make = car.make;
                  return c;
            } catch(err) {
                  this.errors.push(new DataError('error loading car', car));
            }
            return null;
      }
      loadDrone(drone) {
            try{
                  let d = new Drone(drone.license, drone.model, drone.latLong);
                  d.airTimeHours = drone.airTimeHours;
                  d.base = drone.base;
                  return d;
            }catch(err) {
                  this.errors.push(new DataError('error loading drone', drone));
            }
            return null;
      }
      validateCarData(car){
            let requiredProps = 'license model latLong miles make'.split(' ');
            let hasErr = false;
            for( let prop of requiredProps) {
                  if(!car[prop]){
                        this.errors.push(new DataError(`invalid field ${prop} for car`, car));
                        hasErr = true;
                  }
            }
            if(Number.isNaN(Number.parseFloat(car.miles))){
                  this.errors.push(new DataError('invalid mileage', car));
                  hasErr = true;
            }
            return !hasErr;
      }
      validateDroneData(drone){
            let requiredProps = 'license model latLong base airTimeHours'.split(' ');
            let hasErr = false;
            for(let prop of requiredProps){
                  if(!drone[prop]){
                        this.errors.push(new DataError(`invalid field ${prop} for drone`, drone));
                        hasErr = true;
                  }
            }
            return !hasErr;
      }
}
