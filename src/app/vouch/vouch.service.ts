import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vouch } from './vouch';

@Injectable({ providedIn: 'root' })
export class VouchService {
  private apiServerUrl = "http://ec2-35-180-116-202.eu-west-3.compute.amazonaws.com:8080";

  constructor(private http: HttpClient) { }

  public getVouch(): Observable<Vouch[]> {
    return this.http.get<Vouch[]>(`${this.apiServerUrl}/vouch/all`);
  }

  public addVouch(vouch: Vouch): Observable<Vouch> {
    return this.http.post<Vouch>(`${this.apiServerUrl}/vouch/add`, vouch);
  }
}