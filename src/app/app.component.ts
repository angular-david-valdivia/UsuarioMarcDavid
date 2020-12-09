import { Component,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from './models/Usuario.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UsuarioMarcDavid';
  usuariosArray: Usuario[]=[];
  selectedUsuario: Usuario = null;

  @Input() refrescarUsuario:Usuario;


  ngOnInit(): void {
    this.usuariosArray.push(new Usuario('Davod','nuker',12,'null','Este Chico esta mal de la cabeza','dabod@gmail.com','uno'));
    this.usuariosArray.push(new Usuario('dadi','suggar',20,'null','solo piensa en el dinero','suggardadi@gmail.com','dos'));
    this.usuariosArray.push(new Usuario('marc','valdivia',12,'null','nunca esta presente','marcvaldivia@gmail.com','tres'));

  }

  infoUsuario(usuario: Usuario): void {

    // Quitamos la interfaz de crear un personaje
    //this.isCreatingNewChar = false;

    // Guardamos en una variable de la clase el personaje seleccionado
    // this.characterSelected = character;
     this.selectedUsuario = usuario;

     console.log (this.selectedUsuario );

    // Guardamos en el local storage del navegador el personaje seleccionado
    // localStorage.setItem('character', JSON.stringify(character));
  }





}

// Usuarios:String[]= [ nombre , cognombre , edad, Foto, Descripció, Correu, Contrasenya,]


