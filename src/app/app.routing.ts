import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { TiendaComponent } from './component/tienda/tienda.component';
import { AnimalsComponent } from './component/animals/animals.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { KeeperComponent } from './component/keeper/keeper.component';

const appRoutes: Routes = [
	{path : '', component : TiendaComponent},	
	{path : '', redirectTo: 'tienda', pathMatch : 'full'},
	{path : 'tienda', component: TiendaComponent},
	{path : 'animales', component: AnimalsComponent},
	{path : 'contacto', component: ContactComponent},
	{path : 'cuidadores', component: KeeperComponent},
	{path : 'home', component: HomeComponent},
	{path : '**', component: TiendaComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);