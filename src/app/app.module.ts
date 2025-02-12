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
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

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
    MenuComponent
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
