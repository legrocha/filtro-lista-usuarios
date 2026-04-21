import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { AdressPipe } from './adress.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';



@NgModule({
  declarations: [
    PhonePipe,
    AdressPipe,
    StatusPipe,
    DashIfEmptyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhonePipe,
    AdressPipe,
    StatusPipe,
    DashIfEmptyPipe
  ]
})
export class PipesModule { }
