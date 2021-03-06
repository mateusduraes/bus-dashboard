import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/buses',
    pathMatch: 'full',
  },
  {
    path: 'buses',
    loadChildren: () => import('./pages/bus/bus.module').then(m => m.BusModule),
  },
  {
    path: 'stations',
    loadChildren: () => import('./pages/station/station.module').then(m => m.StationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
