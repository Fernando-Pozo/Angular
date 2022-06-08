import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';


@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(
    private service: TransferenciaService
    ){}

  transferir(){
    console.log('Solicitada nova trasferencia');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampo();
    },
    error => console.error(error));
  }

  limparCampo(){
    this.valor = null;
    this.destino = null;
  }
}
