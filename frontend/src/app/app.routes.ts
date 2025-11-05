// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'stations', pathMatch: 'full' },

  // STATIONS
  { path: 'stations', loadComponent: () => import('./components/station-list/station-list.component').then(m => m.default) },
  { path: 'station/add', loadComponent: () => import('./components/station-form/station-form.component').then(m => m.default) },
  { path: 'station/edit/:id', loadComponent: () => import('./components/station-form/station-form.component').then(m => m.default) },

  // CARBURANTS
  { path: 'carburants', loadComponent: () => import('./components/carburant-list/carburant-list.component').then(m => m.default) },
  { path: 'carburant/add', loadComponent: () => import('./components/carburant-form/carburant-form.component').then(m => m.default) },
  { path: 'carburant/edit/:id', loadComponent: () => import('./components/carburant-form/carburant-form.component').then(m => m.default) },

  // PRIX
  { path: 'prix/ajouter', loadComponent: () => import('./components/prix-form/prix-form.component').then(m => m.default) },
  { path: 'station/:id/prix', loadComponent: () => import('./components/prix-chart/prix-chart.component').then(m => m.default) }
];