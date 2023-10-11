import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienesComponent } from './quienes/quienes.component';
import { HomeComponent } from './home/home.component';
import { ChildsPacksComponent } from './childs-packs/childs-packs.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'quienes', component: QuienesComponent},
  {path: 'childs-packs', component: ChildsPacksComponent},
  {path: 'galeria', component: GaleriaComponent},

  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
