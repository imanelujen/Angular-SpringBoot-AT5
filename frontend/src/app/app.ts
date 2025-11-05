// src/app/app.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AsyncPipe
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Signal réactif pour le titre
  protected readonly title = signal('Atelier 5 - Gestion Stations');
}