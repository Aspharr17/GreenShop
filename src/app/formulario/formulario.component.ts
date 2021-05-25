import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
// import { NuevaModel } from '../models/nueva.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  planta = {
    nombre: '',
    detalles: '',
    costo: ''
  }

  constructor( private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  guardar( forma: NgForm){
    console.log( forma );
    if (forma.invalid){
      Object.values ( forma.controls ).forEach (control => {
        control.markAllAsTouched();
      });
    }
  }
}
