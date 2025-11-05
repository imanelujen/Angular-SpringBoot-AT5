// src/app/services/station.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../models/station.model';

@Injectable({ providedIn: 'root' })
export class StationService {
  private api = 'http://localhost:8080/api/stations';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Station[]> {
    return this.http.get<Station[]>(this.api);
  }

  getById(id: number): Observable<Station> {
    return this.http.get<Station>(`${this.api}/${id}`);
  }

  add(station: Station): Observable<Station> {
    return this.http.post<Station>(this.api, station);
  }

  update(id: number, station: Station): Observable<Station> {
    return this.http.put<Station>(`${this.api}/${id}`, station);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}