import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    let baseUrl = 'https://krds-assignment.github.io/aoc/api-assets/data.json';
    return this.http.get<any>(baseUrl);
  }
}
