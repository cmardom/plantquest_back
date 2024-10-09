import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {GuiaComponent} from "./guia/guia.component";
import {LoginComponent} from "./login/login.component";
import {SigninComponent} from "./signin/signin.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {BlogComponent} from "./blog/blog.component";
import {FaqComponent} from "./faq/faq.component";

export const routes: Routes = [
  {path:'home', component: LandingComponent},
  {path:'guia', component: GuiaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'singin', component: SigninComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'faq', component: FaqComponent},




  //{path:'campings/nuevo', component: CampingsFormularioComponent},
  //{path:'campings/:id', component: CampingsFormularioComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'}
];
