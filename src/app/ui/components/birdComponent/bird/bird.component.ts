import { BirdUseCase } from './../../../../domain/usecases/bird.usecase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

  constructor(private birdUseCase:BirdUseCase) { }

  ngOnInit(): void {
    const data = {
      name: '',
      scientificName: ''
    }
    this.birdUseCase.create(data).subscribe(result => {
      console.log(result);
    })
  }

}
