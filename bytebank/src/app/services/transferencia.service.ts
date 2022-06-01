import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

private listatransferencia: any[];

constructor() {
  this.listatransferencia = [];
}

get transferencias(){
  return this.listatransferencia;
}

adicionar(transferencia: any){
  this.hidratar(transferencia);
  this.listatransferencia.push(transferencia);
}

private hidratar(transferencia: any){
  transferencia.data = new Date();
}

}
