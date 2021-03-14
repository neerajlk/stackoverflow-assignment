import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stackoverflow',
    pathMatch: 'full',
  },
  {
    path: 'stackoverflow',
    loadChildren: () => import('./app-modules/stackoverflow-questions/stackoverflow.module').then(m => m.stackoverflowModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
