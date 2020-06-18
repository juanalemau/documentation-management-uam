import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef  } from '@nebular/theme';

@Component({
  selector: 'modal-status-detalhe',
  templateUrl: './modal-status-detalhe.component.html',
  styleUrls: ['./modal-status-detalhe.component.scss']
})
export class ModalStatusDetalheComponent implements OnInit {

  @Input() data: any;

  constructor(
    protected ref: NbDialogRef<ModalStatusDetalheComponent>) {
  }

  ngOnInit(){
    console.log(this.data);
  }

  close(){
    this.ref.close();
  }
}
