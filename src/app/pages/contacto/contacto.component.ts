import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  enviarFormulario() {
    alert('¡Gracias por contactarnos! Nos pondremos en contacto pronto.');
  }
}
