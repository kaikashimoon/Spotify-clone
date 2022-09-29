import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',  //localhost:4200
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'tracks',  //localhost:4200
    loadChildren: () => import(`./modules/tracks/tracks.module`).then(m => m.TracksModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
