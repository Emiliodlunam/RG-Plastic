// app.routes.ts
import { Routes } from '@angular/router';

// Importa aquí tus componentes
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SustentabilidadComponent } from './pages/sustentabilidad/sustentabilidad.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AvisoPrivacidadComponent } from './pages/aviso-privacidad/aviso-privacidad.component';
import { TerminosCondicionesComponent } from './pages/terminos-condiciones/terminos-condiciones.component';

// IMPORTANTE: debe ser 'export const ...'
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'sustentabilidad', component: SustentabilidadComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'aviso-privacidad', component: AvisoPrivacidadComponent },
  { path: 'terminos-condiciones', component: TerminosCondicionesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
