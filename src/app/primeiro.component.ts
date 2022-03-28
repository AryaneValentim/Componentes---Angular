import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  template: `<div>
  <p> primeiro componento feito a mão </p>
  <app-segundo></app-segundo>
  <app-segundo></app-segundo>
  <app-segundo></app-segundo>
  <app-segundo></app-segundo>
  </div>`,

})
export class PrimeiroComponent {}
