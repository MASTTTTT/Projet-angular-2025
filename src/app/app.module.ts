import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuDetailComponent } from './menus/menu-detail/menu-detail.component';
import { MenuEditComponent } from './menus/menu-edit/menu-edit.component';
import { PlatListComponent } from './plat/plat-list/plat-list.component';
import { PlatItemComponent } from './plat/plat-item/plat-item.component';
import { PlatEditComponent } from './plat/plat-edit/plat-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuListComponent,
    MenuItemComponent,
    MenuDetailComponent,
    MenuEditComponent,
    PlatListComponent,
    PlatItemComponent,
    PlatEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
