import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/template/template.component').then(m => m.TemplateComponent)
  }
];
