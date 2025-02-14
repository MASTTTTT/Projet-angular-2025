import { Component, Input } from '@angular/core';
import { Menu, StatutMenu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';
import { PlatService } from '../../services/plat.service';
import { Plat } from '../../models/plat';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  @Input()
  public menu: Menu = new Menu();
  readonly statutMenu = StatutMenu;

  constructor (
    private menuService: MenuService){}

  public onDelete(): void{
    this.menuService.deleteMenu(this.menu)
  }
}


