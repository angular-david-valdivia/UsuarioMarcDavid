import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  @Output() usuarioEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  newUsuari: Usuario = null;
  nuevoUsuario: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(itemForm: any): void {

    console.log(itemForm);


    // public nombre: string,
    // public cognombre: String,
    // public edad: number,
    // public foto: String,
    // public Descripcion: String,
    // public correo: String,
    // public contraseña: String,

    // Guardamos los valores del formulario en de un usuario nuevo

    this.newUsuari = new Usuario(itemForm.controls.nombre.value,
      itemForm.controls.cognombre.value,
      itemForm.controls.edad.value,
      itemForm.controls.foto.value,
      itemForm.controls.Descripcion.value,
      itemForm.controls.correo.value,
      itemForm.controls.contraseña.value);

    this.usuarioEvent.emit(this.newUsuari);
    console.log(this.newUsuari);

    // console.log(this.usuarioEvent);


    // Enviamos el evento "characterEvent" y le pasamos el personaje creado

    //
    // this.usuarioEvent.emit(this.newUsuari);


  }

}
