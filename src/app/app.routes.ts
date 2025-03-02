import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TwoPathComponent } from './two-path/two-path.component';
import { AsideGuard } from './aside/aside.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, outlet: 'home' },
  {
    path: 'anotherComponent',
    loadComponent: () => import('./aside/aside.component').then(m => m.AsideComponent),
    canActivate: [AsideGuard]
  },
  { path: 'two-path', component: TwoPathComponent },
  { path: '**', redirectTo: '' }
];
