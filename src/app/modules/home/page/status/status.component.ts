import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalStatusDetalheComponent } from '../modal-status-detalhe/modal-status-detalhe.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {

  constructor(private dialogService: NbDialogService) {
  }

  open() {
    this.dialogService.open(ModalStatusDetalheComponent, { hasScroll: true });
  }
}
