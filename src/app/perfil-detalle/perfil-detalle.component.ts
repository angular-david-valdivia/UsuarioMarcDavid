import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-perfil-detalle',
  templateUrl: './perfil-detalle.component.html',
  styleUrls: ['./perfil-detalle.component.css']
})
export class PerfilDetalleComponent implements OnInit {

  @Input() selected: Usuario;
  @Output() deleteEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {
  }


  deleteUsuario(): void{
    this.deleteEvent.emit(this.selected);
  }



}
