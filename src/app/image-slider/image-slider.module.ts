import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ImageSliderComponent } from './image-slider.component';


@NgModule({
  declarations: [
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    DeferLoadModule
  ],
  exports: [
    ImageSliderComponent
  ],
  entryComponents: [
    
  ]
})
export class ImageSliderModule {}
