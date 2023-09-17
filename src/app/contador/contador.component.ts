import { Component, OnInit } from '@angular/core';
import { persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {


  }


  // ps: persona = {
  //   nombre: 'Alexis Del Castillo',
  //   edad: 20
  // };

  numero : number = 10;

decrementar(){

this.numero--;

}
incrementar(){
  this.numero = this.numero +1;
}


}
