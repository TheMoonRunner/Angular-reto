import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientUserService } from '../../../shared/http-client.service';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // private readonly _http = inject(HttpClientUserService);
  private readonly _http = inject(HttpClient);
  //private readonly apiUrl = environment.apiUrl; //modificarlo OT
  constructor() { }

  // public getAll(){
  //   return this._http.get(`/posts/all`);
  // }
  public getAll(): Observable<any> {
    return this._http.get(`${this.apiUrl}/posts/all`);
  }


  // public new(data: any) {
  //   return this._http.post(`/posts/create`, data);
  // }
  public new(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/posts/create`, data);
  }

  // public detele(id: any) {
  //   return this._http.delete(`/posts/${id}`);
  // }
  public delete(id: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/posts/${id}`);
  }

}
