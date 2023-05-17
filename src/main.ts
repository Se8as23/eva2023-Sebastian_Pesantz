import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,CabeceraComponent,MenuComponent,PiePaginaComponent],
  templateUrl: `./inicio.html`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
