import AirPlane from './Airplane';
import Car from './Car';

export default class FuturisticCar implements Car, AirPlane {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
