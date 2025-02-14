import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuEditComponent } from './menus/menu-edit/menu-edit.component';
import { MenuDetailComponent } from './menus/menu-detail/menu-detail.component';
import { PlatEditComponent } from './plat/plat-edit/plat-edit.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: 'menus', component: MenuListComponent },
  { path: 'menus/new', component: MenuEditComponent },
  { path: 'menus/:id/plats', component: MenuDetailComponent },
  { path: 'menus/:id/plats/new', component: PlatEditComponent },
  { path: 'menus/:id/plats/edit/:idPlat', component: PlatEditComponent },
  { path: 'menus/edit/:id', component: MenuEditComponent },
  { path: '', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
