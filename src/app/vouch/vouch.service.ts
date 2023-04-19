import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vouch } from './vouch';

@Injectable({providedIn: 'root'})
export class VouchService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient){}

  public getVouch(): Observable<Vouch[]> {
    return this.http.get<Vouch[]>(`${this.apiServerUrl}/vouch/all`);
  }
}