import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.sass']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activateRouter: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activateRouter.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisAlpha(id))
      )
      .subscribe(pais => this.pais = pais);


    /*     this.activateRouter.params
          .subscribe(({ id }) => {
            this.paisService.getPaisAlpha(id)
            .subscribe(pais=>{
              console.log(pais);
              
            });
          }); */
  }

}
