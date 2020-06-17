import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../../../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post('http://localhost:3000/api/register', user);
  }

}