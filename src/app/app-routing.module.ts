import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtapasComplementaresComponent } from './etapas-complementares/etapas-complementares.component';

const routes: Routes = [
  { path:'etapas',  component:EtapasComplementaresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
