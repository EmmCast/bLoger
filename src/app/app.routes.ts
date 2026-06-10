import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/authentication/pages/login/login.component')
        .then(c => c.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./modules/dashboard/pages/dashboard/dashboard.component')
        .then(c => c.DashboardComponent)
  },
  {
    path: 'recommendations/:type',
    loadComponent: () =>
      import('./modules/recommendations/pages/recommendation-list/recommendation-list.component')
        .then(c => c.RecommendationListComponent)
  },
  {
    path: 'recommendations/:type/add',
    loadComponent: () =>
    import('./modules/recommendations/components/recommendation-form/recommendation-form.component')
      .then(c => c.RecommendationFormComponent)
  },
  {
    path: 'recommendations/:type/:title',
    loadComponent: () =>
      import('./modules/recommendations/pages/recommendation-detail/recommendation-detail.component')
        .then(c => c.RecommendationDetailComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
  
];