import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  getResults(): any {
    // return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  getWinners(): any {
    // return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  sendMessage(): any {

  }
}
