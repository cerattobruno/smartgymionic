import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichamPage } from './ficham.page';

const routes: Routes = [
  {
    path: '',
    component: FichamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichamPageRoutingModule {}
