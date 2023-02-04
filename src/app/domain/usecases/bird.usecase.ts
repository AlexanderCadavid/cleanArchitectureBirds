import { Observable, of} from 'rxjs';
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators"
import { BirdGateway } from "../models/gateways/bird.gateway";
import { IBirdRequest } from 'src/app/infrastructure/bird.models';
import { IBirdModel } from '../models/bird.models';

@Injectable()
export class BirdUseCase{
  constructor(private birdGateway: BirdGateway){}

    create(params: IBirdRequest): Observable<IBirdModel | null> {
      return this.birdGateway.createBird(params).pipe(
        catchError(()=> {
          return of(null)
        })
      )
     }


}

