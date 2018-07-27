import { Injectable } from '@angular/core';
import { Service } from '../model/service.model';

@Injectable()
export class ServicesService {
  constructor() { }

  getServices() {
    const fakeServices = [
      { id: 1, name: 'Electricidad', description: 'Some quick example text to build on the card title', categoryId: 3 },
      { id: 2, name: 'Auxilio Mecánico', description: 'Some quick example text to build on the card title', categoryId: 2 },
      { id: 3, name: 'Chofer Reemplazo', description: 'Some quick example text to build on the card title', categoryId: 1 },
      { id: 4, name: 'Médico a Domicilio', description: 'Some quick example text to build on the card title', categoryId: 2 },
      { id: 5, name: 'Ambulancia', description: 'Some quick example text to build on the card title', categoryId: 2 },
      { id: 6, name: 'Gasfitero', description: 'Some quick example text to build on the card title', categoryId: 3 }
    ];
    return fakeServices;
  }
}
