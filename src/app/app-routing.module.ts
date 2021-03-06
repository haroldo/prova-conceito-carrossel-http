import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtapasComplementaresComponent } from './etapas-complementares/etapas-complementares.component';
import { HtmlCssComponent } from './html-css/html-css.component';

const routes: Routes = [
  { path:'etapas',  component:EtapasComplementaresComponent },
  { path:'html',  component:HtmlCssComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
