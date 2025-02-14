import { Component, Input } from '@angular/core';
import { Menu, StatutMenu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';
import { PlatService } from '../../services/plat.service';
import { Plat } from '../../models/plat';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
    private menuService: MenuService,
    private router: Router
  ){}

  public onDelete(): void{
    this.menuService.deleteMenu(this.menu).subscribe({
      next: () =>
        this.router.navigateByUrl('/')
        .then(() =>
        this.router.navigateByUrl('/menus') // Refresh le composant à la suite de la suppression
        ),
      error: (err) => console.log('Erreur de suppression du menu : ', err),
    });
  }
}


