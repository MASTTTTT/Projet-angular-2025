import { Component, Input } from '@angular/core';
import { Plat } from '../../models/plat';
import { PlatService } from '../../services/plat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plat-item',
  templateUrl: './plat-item.component.html',
  styleUrl: './plat-item.component.css',
})
export class PlatItemComponent {
  @Input()
  public plat: Plat = new Plat();

  constructor(
    private platService: PlatService,
    private router: Router
  ) {}

  public onDelete(): void {
    this.platService.deletePlat(this.plat.id).subscribe({
      next: () =>
        this.router.navigateByUrl('/menus')
        .then(() => this.router.navigateByUrl('/menus/' + this.plat.menuId + '/plats') // Refresh le composant à la suite de la suppression
          ),
      error: (err) => console.log('Erreur de suppression du plat : ', err),
    });
  }
}
