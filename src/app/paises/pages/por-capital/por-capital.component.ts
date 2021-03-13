import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.sass']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  error: boolean = false;
  prueba:boolean = false;
  paises: Country[] = [];

  constructor(
    private paisService:PaisService
  ) { }

  ngOnInit(): void {
  }
  
  buscar(argument:string): void {
    this.error = false;
    this.termino = argument;
    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) => {
        this.error = true;
        this.paises =[];
      });
  }

  sugerencias(argumento:string){
    this.error = false;
    
  }
}
