import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html',
  styleUrls: ['./paises-input.component.sass']
})
export class PaisesInputComponent implements OnInit {

  termino: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  debounce: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscar():void {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada():void {
    this.debounce.next(this.termino);
  }

}
