import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BirdComponent } from './birdComponent/bird/bird.component';
import { DomainModule } from '../../domain/domain.module';
import { BirdService } from '../../infrastructure/birdServices/bird.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdGateway } from 'src/app/domain/models/gateways/bird.gateway';



@NgModule({
  declarations: [BirdComponent],
  imports: [
    CommonModule,
    DomainModule,
    HttpClientModule
  ],
  exports: [BirdComponent],
  providers: [
    {provide: BirdGateway, useClass: BirdService}
  ]
})
export class ComponentsModule { }
