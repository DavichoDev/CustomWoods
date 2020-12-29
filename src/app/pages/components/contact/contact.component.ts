import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  public firstFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.crearFormulario();

  }

  crearFormulario() {
    this.firstFormGroup = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(`^[a-zA-Z]*$`)]],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });
  }

  enviarMensaje() {
    console.log( this.firstFormGroup.value );
    this.firstFormGroup.reset( this.firstFormGroup.value );
  }

}
