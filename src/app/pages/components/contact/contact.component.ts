import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  public firstFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

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

  async enviarMensaje() {
    
    let jsonForm = this.firstFormGroup.value;
    
    this.emailService.enviarMensaje(jsonForm).subscribe();
    
    this.firstFormGroup.reset();
  }

}
