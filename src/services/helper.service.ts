import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const RACE_SERIES = 'f1'

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';

  }


  getResults(): any {
    return this.http.get("http://ergast.com/api/f1/2017/drivers.json", { responseType: 'text' });
  }

  getWinners(): any {
    // return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  sendMessage(): any {

  }
}
