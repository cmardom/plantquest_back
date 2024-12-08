import { Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {GuiaComponent} from "./guia/guia.component";
import {LoginComponent} from "./login/login.component";
import {SigninComponent} from "./signin/signin.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {BlogComponent} from "./blog/blog.component";
import {FaqComponent} from "./faq/faq.component";
import {PlantaComponent} from "./planta/planta.component";
import {BlogpostComponent} from "./blog/blogpost/blogpost.component";
import {GestionDeContenidoComponent} from "./gestion-de-contenido/gestion-de-contenido.component";
import {EditBlogComponent} from "./gestion-de-contenido/gestion-de-blog/edit-blog/edit-blog.component";
import {
  CreateBlogComponent
} from "./gestion-de-contenido/gestion-de-blog/create-blog/create-blog/create-blog.component";
import {
  EditPlantaComponent
} from "./gestion-de-contenido/gestion-de-planta/edit-planta/edit-planta/edit-planta.component";
import {CreatePlantaComponent} from "./gestion-de-contenido/gestion-de-planta/create-planta/create-planta.component";

export const routes: Routes = [
  {path:'home', component: LandingComponent},
  {path:'guia', component: GuiaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'singin', component: SigninComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'faq', component: FaqComponent},
  { path: 'blogs/:id', component: BlogpostComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'gestion-de-contenido', component: GestionDeContenidoComponent },
  { path: 'gestion-de-contenido/create-blog', component: CreateBlogComponent },
  { path: 'gestion-de-contenido/edit-blog/:id', component: EditBlogComponent },
  {path: 'planta', component: PlantaComponent},
  {path: 'planta/:id', component: PlantaComponent},
  { path: 'gestion-de-contenido/edit-planta/:id', component: EditPlantaComponent },
  { path: 'gestion-de-contenido/create-planta', component: CreatePlantaComponent },



  //http://localhost:8080/v1/api/blogs?id=1




//{path:'campings/nuevo', component: CampingsFormularioComponent},
  //{path:'campings/:id', component: CampingsFormularioComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'}
];
