import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { ActorComponent } from './pages/actor/actor.component';
import { ActorpeliculaComponent } from './pages/actorpelicula/actorpelicula.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'signup', component: SignupComponent, pathMatch: 'full'},
  {path: 'pelicula', component: PeliculaComponent, pathMatch: 'full'},
  {path: 'actor', component: ActorComponent, pathMatch: 'full'},
  {path: 'actorpelicula', component: ActorpeliculaComponent, pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
