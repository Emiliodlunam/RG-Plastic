// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterModule, // <-- IMPORTANTE: para usar [routerLink] y <router-outlet>
  ],
})
export class AppComponent {
  // si tu prueba .spec busca una propiedad title, agrégala:
  title = 'RG-Plastic';
}
