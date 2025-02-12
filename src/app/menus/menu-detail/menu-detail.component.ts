import { Component } from '@angular/core';
import { Menu } from '../../models/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrl: './menu-detail.component.css',
})
export class MenuDetailComponent {
  menu: Menu = new Menu();

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.menuService.getMenu(id).subscribe({
      next: (menu) => (this.menu = menu),
      error: (err) => this.router.navigateByUrl('/menus'),
    });
  }
}
