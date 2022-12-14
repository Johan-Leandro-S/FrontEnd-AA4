import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaPeliculaComponent } from './pages/lista-pelicula/lista-pelicula.component';
import { ListaActorComponent } from './pages/lista-actor/lista-actor.component';
import { ListaActorpeliculaComponent } from './pages/lista-actorpelicula/lista-actorpelicula.component';
import { HomeComponent } from './pages/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { ListaUsuarioComponent } from './pages/lista-usuario/lista-usuario.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { ActorComponent } from './pages/actor/actor.component';
import { ActorpeliculaComponent } from './pages/actorpelicula/actorpelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ListaPeliculaComponent,
    ListaActorComponent,
    ListaActorpeliculaComponent,
    HomeComponent,
    ListaUsuarioComponent,
    PeliculaComponent,
    ActorComponent,
    ActorpeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
