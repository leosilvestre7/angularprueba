import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  constructor() { }

  getCategories() {
    const fakeCategories = [
      { id: 0, name: 'Todos' },
      { id: 1, name: 'Autos' },
      { id: 2, name: 'Salud' },
      { id: 3, name: 'Hogar' }
    ];
    return fakeCategories;
  }
}
