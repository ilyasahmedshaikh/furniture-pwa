import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './product-card/product-card.component';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class SharedModule { }
