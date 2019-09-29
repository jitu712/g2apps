import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashboardComponent } from './dashboard/app-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: AppDashboardComponent },
  {
    path: 'timeline',
    loadChildren: () => import('./applications/timeline/timeline.module').then(m => m.TimelineModule)
  }, {
    path: 'gita',
    loadChildren: () => import('./applications/gita/gita.module').then(m => m.GitaModule)
  }, {
    path: 'news',
    loadChildren: () => import('./applications/news/news.module').then(m => m.NewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
