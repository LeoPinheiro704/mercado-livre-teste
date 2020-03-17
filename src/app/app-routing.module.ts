import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'internal'
  },
  {
    path: 'internal',
    loadChildren: './modules/internal/internal.module#InternalModule',
  },
  {
    path: '**',
    redirectTo: 'internal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
