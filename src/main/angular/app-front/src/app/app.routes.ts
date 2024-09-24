import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {GuiaComponent} from "./guia/guia.component";

export const routes: Routes = [
  {path:'home', component: LandingComponent},
  {path:'guia', component: GuiaComponent},

  //{path:'campings/nuevo', component: CampingsFormularioComponent},
  //{path:'campings/:id', component: CampingsFormularioComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'}
];
