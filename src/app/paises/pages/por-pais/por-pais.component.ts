import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.sass']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  error: boolean = false;
  prueba: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(argument: string): void {
    this.error = false;
    this.termino = argument;
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) => {
        this.error = true;
        this.paises = [];
      });
  }

  sugerencias(argumento: string) {
    this.error = false;
    this.paisService.buscarPais(argumento)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0.5),
        (err) => this.paisesSugeridos = []
      );

  }
}
