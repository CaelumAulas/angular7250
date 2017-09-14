import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  title: String = 'Caelumpic';
  fotos: Object[];

  constructor(http: Http) { 
    http.get('http://localhost:3001/v1/fotos')
        .map(res => res.json())
        .subscribe(
          fotos => this.fotos = fotos,
          erro => console.log(erro))
  }

  ngOnInit() {
  }

}
