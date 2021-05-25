import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Rutas
import { AppRoutingModule } from './app-routing.module';

//Modulos Angular
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Componentes
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FooterComponent } from './footer/footer.component';
import { ListaComponent } from './lista/lista.component';
import { from } from 'rxjs';
import { ListaPlantasComponent } from './lista-plantas/lista-plantas.component';
// import { format } from 'path';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    MenuComponent,
    CarouselComponent,
    NosotrosComponent,
    FooterComponent,
    ListaComponent,
    ListaPlantasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
