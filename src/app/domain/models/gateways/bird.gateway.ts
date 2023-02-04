import { IBirdRequest } from './../../../infrastructure/bird.models';
import { Observable } from "rxjs";
import { IBirdModel } from "../bird.models";

export abstract class BirdGateway {

  abstract createBird(params:IBirdRequest): Observable<IBirdModel>
}
