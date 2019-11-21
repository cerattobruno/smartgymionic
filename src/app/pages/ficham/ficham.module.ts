import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichamPageRoutingModule } from './ficham-routing.module';

import { FichamPage } from './ficham.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichamPageRoutingModule
  ],
  declarations: [FichamPage]
})
export class FichamPageModule {}
