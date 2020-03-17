import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { InternalComponent } from './internal.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    InternalComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule
  ]
})
export class InternalModule { }
