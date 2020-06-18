import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService  } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Status',
      icon: 'checkmark-square-outline',
      link: '/dashboard/status'
    },
    {
      title: 'Documentação',
      icon: 'file-text-outline',
      link: '/dashboard/documentation'
    },
    {
      title: 'Perfil',
      icon: 'person-outline',
      link: '/dashboard/profile'
    },
    {
      title: 'Sessão de Encerramento',
      icon: 'unlock-outline'
    },
  ];

  constructor(private menuService: NbMenuService) {}

  ngOnInit() {}
}
