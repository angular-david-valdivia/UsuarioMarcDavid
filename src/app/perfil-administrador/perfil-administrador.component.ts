import { Component, OnInit } from '@angular/core';
import {Usuario} from 'src/app/models/Usuario.model'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-administrador',
  templateUrl: './perfil-administrador.component.html',
  styleUrls: ['./perfil-administrador.component.css']
})
export class PerfilAdministradorComponent implements OnInit {

  usuariosArray: Usuario[]=[];
  selectedUsuario: Usuario = null;

  constructor() {
    this.usuariosArray.push(new Usuario('Davod','nuker',12,'null','Este Chico esta mal de la cabeza','dabod@gmail.com','uno'));
    this.usuariosArray.push(new Usuario('dadi','suggar',20,'null','solo piensa en el dinero','suggardadi@gmail.com','dos'));
    this.usuariosArray.push(new Usuario('marc','valdivia',12,'null','nunca esta presente','marcvaldivia@gmail.com','tres'));

  }

  ngOnInit(): void {
  }
  borrar(selected: Usuario) {

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
    }







