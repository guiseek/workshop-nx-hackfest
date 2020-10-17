import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataAccessService {
  protected route: string;

  constructor(protected readonly http: HttpClient) {}

  get(endpoint: string, params: HttpParams) {
    const path = `${this.route}/${endpoint}`;
    return this.http.get(path, { params });
  }

  post(endpoint: string, body: any) {
    const path = `${this.route}/${endpoint}`;
    return this.http.post(path, body);
  }

  put(endpoint: string, body: any) {
    const path = `${this.route}/${endpoint}`;
    return this.http.put(path, body);
  }

  delete(endpoint: string) {
    const path = `${this.route}/${endpoint}`;
    return this.http.delete(path);
  }
}
