import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { Observable } from 'rxjs';
import { PlatService } from './plat.service';
import { Plat } from '../models/plat';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  readonly menuApi = environment.apiUrl + '/menus'

  constructor(private http: HttpClient, private platService: PlatService) {}

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menuApi);
  }
  getMenu(id: number): Observable<Menu> {
    return this.http.get<Menu>(this.menuApi + '/' + id);
  }
  addMenu(newMenu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.menuApi, newMenu);
  }
  updateMenu(menu: Menu): Observable<Menu> {
    return this.http.put<Menu>(this.menuApi + '/' + menu.id, menu);
  }
  deleteMenu(menu: Menu): Observable<Menu> {
    this.platService.getPlats(menu.id).subscribe((plats) =>  {
        plats.forEach((plat) => {
          this.platService.deletePlat(plat.id);
        });
      });
    return this.http.delete<Menu>(this.menuApi + '/' + menu.id);
  }
}
