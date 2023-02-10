import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './userInterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'http://localhost:3005/users';

  constructor(private client: HttpClient) {}

  getAllUsers() {
    return this.client.get(this.baseUrl);
  }

  getUserById(id: number) {
    return this.client.get(`${this.baseUrl}/${id}`);
  }
  addNewUser(user: User) {
    return this.client.post(this.baseUrl, user);
  }
  editUser(id: any, user: User) {
    return this.client.patch(`${this.baseUrl}/${id}`, user);
  }
  deleteUser(id: number) {
    return this.client.delete(`${this.baseUrl}/${id}`);
  }
}
