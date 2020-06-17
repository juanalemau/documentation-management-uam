import { Component } from '@angular/core';
import { NbDialogRef  } from '@nebular/theme';

@Component({
  selector: 'modal-status-detalhe',
  templateUrl: './modal-status-detalhe.component.html',
  styleUrls: ['./modal-status-detalhe.component.scss']
})
export class ModalStatusDetalheComponent {

  constructor(protected ref: NbDialogRef<ModalStatusDetalheComponent>) {
  }

  close(){
    this.ref.close();
  }
}
