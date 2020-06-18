import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StatusService {
  
  constructor(private http: HttpClient) { }

  getPurchase() {
    return this.http.get('http://localhost:3000/api/purchase');
  }

  detail(id) {
    return this.http.post('http://localhost:3000/api/detail', { number_order: id });
  }

}