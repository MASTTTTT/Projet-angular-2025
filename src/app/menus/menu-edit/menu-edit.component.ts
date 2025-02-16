import { Component } from '@angular/core';
import { Menu, StatutMenu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrl: './menu-edit.component.css',
})
export class MenuEditComponent {
  public menu: Menu = new Menu();
  readonly statutMenu = StatutMenu;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.menu = new Menu();
    if (id) {
      this.menuService.getMenu(id).subscribe({
        next: (menu) => (this.menu = { ...menu }),
        error: (err) => this.router.navigateByUrl('/menus'),
      });
    }
  }

  public onSubmit(leForm: NgForm): void {
    if (leForm.valid) {
      let ObservableAction;
      if (this.menu.id) {
        ObservableAction = this.menuService.updateMenu(this.menu);
      } else {
        const date_crea = new Date();
        this.menu.date_creation = date_crea.getFullYear() +
          '-' + (date_crea.getMonth() + 1).toString().padStart(2, '0') +
          '-' + date_crea.getDate().toString().padStart(2, '0');
        ObservableAction = this.menuService.addMenu(this.menu);
      }
      ObservableAction.subscribe({
        next: (menu) => {
          this.router.navigateByUrl('/menus');
        },
        error: (err) => {
          console.log('ERREUR de sauvegarde : ', err);
        },
      });
    }
  }
}
