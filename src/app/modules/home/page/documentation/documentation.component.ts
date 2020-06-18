import { Component, OnInit } from '@angular/core';
import { throwIfAlreadyLoaded } from 'src/app/core/guard/module-import.guard';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  type_message: any;
  active_card_cpf: boolean = false;
  active_card_bu: boolean = false;
  active_card_rne: boolean = false; 
  active_card_ct: boolean = false;

  type_document: any;
  response_document: any;

  _active_button_documentation: boolean = false;

  constructor(){}

  ngOnInit(){
  }

  cpfOpenDetail(type){
    this.active_card_cpf = true;
    this.active_card_bu = false;
    this.active_card_rne = false;
    this.active_card_ct = false;
    this.type_message = "cpf";
    this.type_document = type;
  }

  buOpenDetail(type){
    this.active_card_cpf = false;
    this.active_card_bu = true;
    this.active_card_rne = false;
    this.active_card_ct = false;
    this.type_message = "bu";
    this.type_document = type;
  }

  rneOpenDetail(type){
    this.active_card_cpf = false;
    this.active_card_bu = false;
    this.active_card_rne = true;
    this.active_card_ct = false;
    this.type_message = "rne";
    this.type_document = type;
    
  }

  ctOpenDetail(type){
    this.active_card_cpf = false;
    this.active_card_bu = false;
    this.active_card_rne = false;
    this.active_card_ct = true;
    this.type_message = "ct";
    this.type_document = type;
  }

  typeDocumentationNext(){
    if(this.active_card_cpf || this.active_card_bu || this.active_card_ct || this.active_card_rne){
      this._active_button_documentation = true;
    }
  }
} 
