import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.sass']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  getClassCss(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1';
  }

  activarRegion(region: string) {
    if (region== this.regionActiva) return;
    this.regionActiva = region;
    this.paises = [];
    this.paisService.getPaisRegion(region)
      .subscribe(paises => this.paises = paises);
  }

}
