import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Plat } from '../models/plat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlatService {
  readonly platApi = environment.apiUrl + '/plats';
  readonly typesPlatsApi = environment.apiUrl + '/types_plats';

  constructor(private http: HttpClient) {}

  getPlats(menuId: number): Observable<Plat[]> {
    return this.http.get<Plat[]>(this.platApi + '?menuId=' + menuId);
  }
  getPlat(id: number): Observable<Plat> {
    return this.http.get<Plat>(this.platApi + '/' + id);
  }
  addPlat(newPlat: Plat): Observable<Plat> {
    return this.http.post<Plat>(this.platApi, newPlat);
  }
  updatePlat(plat: Plat): Observable<Plat> {
    return this.http.put<Plat>(this.platApi + '/' + plat.id, plat);
  }
  deletePlat(id: number): Observable<Plat> {
    return this.http.delete<Plat>(this.platApi + '/' + id);
  }

  getTypesPlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>(this.typesPlatsApi);
  }
}
