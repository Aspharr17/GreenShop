import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ListaComponent } from './lista/lista.component';
import { ListaPlantasComponent } from './lista-plantas/lista-plantas.component';

const routes: Routes = [
  {path: 'carousel', component: CarouselComponent},
  {path: 'formulario/:id', component: FormularioComponent}, // /:id
  {path: 'menu', component: MenuComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'listaPlantas', component: ListaPlantasComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'carousel'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
