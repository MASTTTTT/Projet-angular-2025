import { Component, Input } from '@angular/core';
import { Plat } from '../../models/plat';
import { PlatService } from '../../services/plat.service';

@Component({
  selector: 'app-plat-item',
  templateUrl: './plat-item.component.html',
  styleUrl: './plat-item.component.css',
})
export class PlatItemComponent {
  @Input()
  public plat: Plat = new Plat();

  constructor(private platService: PlatService) {}

  public onDelete(): void {
    this.platService.deletePlat(this.plat)
  }
}
