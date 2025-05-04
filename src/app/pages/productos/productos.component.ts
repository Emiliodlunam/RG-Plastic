import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  imports: [
    CommonModule
    // Si usas routerLink aquí, agrega RouterModule
  ]
})
export class ProductosComponent {}
