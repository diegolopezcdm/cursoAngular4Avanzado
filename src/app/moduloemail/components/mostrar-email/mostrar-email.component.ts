import { Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
            <div *ngIf="emailContacto">{{emailContacto}}
              <h4>{{title}}</h4>
              <button (click)="eliminarEmail()">Eliminar email de contacto</button>
            </div>
  `
})
export class MostrarEmailComponent implements DoCheck, OnInit{
  title = 'Mostrar Email';
  emailContacto: string;

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  eliminarEmail(){
    localStorage.removeItem('emailContacto');
  }
}
