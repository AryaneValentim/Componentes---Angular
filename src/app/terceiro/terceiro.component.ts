import { Component, Input } from '@angular/core';

@Component ({
  selector: 'app-terceiro',
  template: `
    <div>
      <input type="text" #inputSenha placeholder="Digite sua senha." />
      <br />
      <input type="text" #inputConfirmaSenha (blur)="confirmaSenha(inputSenha.value, inputConfirmaSenha.value)" placeholder="Confirme sua senha." />
    </div>
    <div [style]="mensagem ? 'display: unset;':'display: none;'">
      As senhas não são iguais.
    </div>
  `,
})
export class TerceiroComponent {

  public mensagem: boolean = false;

  public confirmaSenha(senha:string, verificaSenha:string):void{
    this.mensagem = !(senha == verificaSenha);

  }
}
