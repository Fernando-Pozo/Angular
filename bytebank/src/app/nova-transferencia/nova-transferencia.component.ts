import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir(){
    console.log('Solicitada nova trasferencia');

    const valorEmitir = {Valor: this.valor, Destino: this.destino};
    this.aoTransferir.emit(valorEmitir);

    this.limparCampo();
  }

  limparCampo(){
    this.valor = null;
    this.destino = null;
  }
}
