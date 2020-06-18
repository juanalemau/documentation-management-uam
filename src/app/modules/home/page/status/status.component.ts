import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalStatusDetalheComponent } from '../modal-status-detalhe/modal-status-detalhe.component';
import { StatusService } from './shared/status.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit{

  listItem: any = [];

  constructor(
    private dialogService: NbDialogService, 
    private statusService: StatusService) {
  }

  open(id) {
    this.statusService.detail(id)
    .pipe(first())
    .subscribe(info => {
      console.log(info);
      this.dialogService.open(ModalStatusDetalheComponent, { 
        context: {
          data: info
        } 
      }); 
    })
    
  }

  ngOnInit(){
    this.statusService.getPurchase()
    .pipe(first())
    .subscribe(data => {
      this.listItem = data;
    });
  }
}
