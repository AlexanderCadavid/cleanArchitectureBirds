import { BirdUseCase } from './usecases/bird.usecase';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BirdUseCase
  ]
})
export class DomainModule { }
