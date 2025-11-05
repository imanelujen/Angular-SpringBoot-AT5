// src/app/services/histo-carb.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoCarb } from '../models/histo-carb.model';
import { ApiHistoCarb } from '../models/api-histo-carb.model';

@Injectable({ providedIn: 'root' })
export class HistoCarbService {
  private api = 'http://localhost:8080/api/histocarb';

  constructor(private http: HttpClient) {}

  add(histo: ApiHistoCarb): Observable<HistoCarb> {  // POST: Api → GET: HistoCarb
    return this.http.post<HistoCarb>(this.api, histo);
  }

  getByStation(id: number): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(`${this.api}/station/${id}`);
  }
}