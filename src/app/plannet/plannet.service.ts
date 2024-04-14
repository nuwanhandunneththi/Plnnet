import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannetService {

  private apiUrl = 'http://localhost:5126/getGems'; // Replace 'your_endpoint_url' with your actual endpoint URL

  constructor(private http: HttpClient) { }

  savePlanetData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
