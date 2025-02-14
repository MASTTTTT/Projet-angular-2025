import { Component } from '@angular/core';
import { Plat } from '../../models/plat';
import { PlatService } from '../../services/plat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plat-edit',
  templateUrl: './plat-edit.component.html',
  styleUrl: './plat-edit.component.css',
})
export class PlatEditComponent {
  public plat: Plat = new Plat();

  constructor(
    private platService: PlatService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idMenu = this.route.snapshot.params['id'];
    const idPlat = this.route.snapshot.params['idPlat'];
    this.plat = new Plat();
    if (idMenu) {
      if (idPlat) {
        this.platService.getPlat(idPlat).subscribe({
          next: (plat) => (this.plat = { ...plat }),
          error: (err) => this.router.navigateByUrl('/menus/' + idMenu),
        });
      }
    }
  }

  public onSubmit(leForm: NgForm): void {
    if (leForm.valid) {
      let ObservableAction;
      if (this.plat.id) {
        ObservableAction = this.platService.updatePlat(this.plat);
      } else {
        this.plat.menuId = this.route.snapshot.params['id'];
        ObservableAction = this.platService.addPlat(this.plat);
      }
      ObservableAction.subscribe({
        next: (plat) => {
          this.router.navigateByUrl('/menus/' + plat.menuId + '/plats');
        },
        error: (err) => {
          console.log('ERREUR de sauvegarde : ', err);
        }
      });
    }
  }
}
