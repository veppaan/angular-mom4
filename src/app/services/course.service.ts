import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url: string = "https://webbutveckling.miun.se/files/ramschema.json";
  constructor() { }
}
