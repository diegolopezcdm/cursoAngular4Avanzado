import { Component} from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  title = 'Contact';
  emailContacto: string;

  guardarEmail(){
  	console.log(this.emailContacto);
  	localStorage.setItem("emailContacto", this.emailContacto);
  }
}


