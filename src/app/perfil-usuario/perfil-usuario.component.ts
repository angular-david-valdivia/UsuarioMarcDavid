import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Usuario} from 'src/app/models/Usuario.model'

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})

// public nombre: string,
// public cognombre: String,
// public edad: number,
// public foto: String,
// public Descripcion: String,
// public correo: String,
// public contraseña: String,
export class PerfilUsuarioComponent implements OnInit {
  usuariosArray: Usuario[]=[];
  selectedUsuario: Usuario = null;
  nuevoUsuario: Boolean =false;

  @Input() newUsuario: Usuario;
  @Input() selected: Usuario;


  constructor() {}

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
  updateCharacter(selected: Usuario): void {

    // Ponemos el valor en null para que desaparezcan los detalles
    this.selectedUsuario = null;

    // Buscamos un personaje con el mismo nombre y lo actualizamos
    for (let i = 0; i < this.usuariosArray.length; i++) {
      if (this.usuariosArray[i].nombre === selected.nombre) {
        this.usuariosArray[i].foto = selected.foto;
        this.usuariosArray[i].edad = selected.edad;
        this.usuariosArray[i].correo = selected.correo;
        this.usuariosArray[i].contrasenya = selected.contrasenya;
        this.usuariosArray[i].cognombre = selected.cognombre;

      }
    }
  }
    // Función para borrar un personaje
    deleteCharacter(selected: Usuario) {

      // Ponemos el valor en null para que desaparezcan los detalles
      this.selectedUsuario = null;

      // Filtramos el array de personajes
      this.usuariosArray = this.usuariosArray.filter(
        (char: Usuario, index: number, array: Usuario[]) => {

          // Si el nombre del personaje es diferente al que tenemos que borrar
          if (char.nombre !== selected.nombre) {

            // Guardamos el personaje en el array filtrado
            return char;
          }
        });
    }
    addUsuario(newUsuario: Usuario): void {
      this.usuariosArray.push(newUsuario);
    }

}
