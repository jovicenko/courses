import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses = [
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'TypeScript' },
      { id: 3, name: 'C++' },
      { id: 4, name: 'C#' },
      { id: 5, name: 'Python' },
      { id: 6, name: 'SQL' },
      { id: 7, name: 'CyberSecurity' },
      { id: 8, name: 'Linux admin' },
      { id: 9, name: 'Microsoft admin' },
      { id: 10, name: 'Computer servicer' }
    ];
    return {courses};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(courses: Course[]): number {
    return courses.length > 0 ? Math.max(...courses.map(course => course.id)) + 1 : 11;
  }
}