import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Plat } from '../models/plat';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class PlatService {
  readonly platApi = environment.apiUrl + '/menus';

  constructor(private http: HttpClient) {}

  getPlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>(this.platApi + '/');
  }
  getPlat(id: number): Observable<Plat> {
    return this.http.get<Plat>(this.platApi + '/' + id);
  }
  addPlat(newPlat: Plat): Observable<Plat> {
    return this.http.post<Plat>(this.platApi, newPlat);
  }
  // updatePlat(plat: Plat): Observable<Plat> {
  //   return this.http.put<Plat>(this.platApi + '/' + plat);
  // }
  // deletePlat(menu: Plat): Observable<Menu> {
  //   return this.http.delete<Plat>(this.platApi + '/' + menu.id);
  // }
}
