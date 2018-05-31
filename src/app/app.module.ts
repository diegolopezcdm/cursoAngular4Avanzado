import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { routing, appRoutingProviders } from './app.routing';

//Importar nuevo modulo
import { ModuloEmailModule} from './moduloemail/moduloemail.module';

//Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { ParquesComponent } from './component/parques/parques.component';

import { AnimalsComponent } from './component/animals/animals.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { KeeperComponent } from './component/keeper/keeper.component';

import { TinyEditorComponent } from './component/simple-tiny/simple-tiny.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeeperComponent,
    TinyEditorComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,  //<<<< and here
    routing,
    ModuloEmailModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
