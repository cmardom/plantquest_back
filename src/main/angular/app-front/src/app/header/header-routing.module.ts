import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header.component";
import {LandingComponent} from "../landing/landing.component";
import {GuiaComponent} from "../guia/guia.component";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'guia', component: GuiaComponent },
  { path: '', redirectTo: '/landing', component: LandingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HeaderComponent // Add HeaderModule to imports
  ],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
