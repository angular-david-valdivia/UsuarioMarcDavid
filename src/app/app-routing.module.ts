import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilAdministradorComponent } from './perfil-administrador/perfil-administrador.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'perfil-usuario'},
  {path:'perfil-administrador',component:PerfilAdministradorComponent},
  {path: 'perfil-usuario', component:PerfilUsuarioComponent},
  {path: 'registro-usuario', component: RegistroUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
