//importar modulos necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  //<<<< import it here

//importar componentes
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

//decorar ngmodule para cargar los componentes y la configuracion de modulos
@NgModule(
		{
			imports: [CommonModule, FormsModule],
			declarations: [
				GuardarEmailComponent,
				MostrarEmailComponent,
				MainEmailComponent
			],
			exports: [MainEmailComponent]
		}
	)
export class ModuloEmailModule {
	
}
