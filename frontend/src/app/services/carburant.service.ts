import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carburant } from '../models/carburant.model';
@Injectable({ providedIn: 'root' })
export class CarburantService {
  private api = 'http://localhost:8080/api/carburants';

  constructor(private http: HttpClient) {}
  
  save(carburant: Carburant): Observable<Carburant> {
  return this.http.post<Carburant>(this.api, carburant);
}

   delete(id: number): Observable<void> {
  return this.http.delete<void>(`${this.api}/${id}`);
   }
  getAll(): Observable<Carburant[]> {
    return this.http.get<Carburant[]>(this.api);
  }

 getById(id: number): Observable<Carburant> {
      return this.http.get<Carburant>(`${this.api}/${id}`);
    }
  
  update(id: number, carburant: Carburant): Observable<Carburant> {
      return this.http.put<Carburant>(`${this.api}/${id}`, carburant);
    }
  
 
}