import { Observable } from 'rxjs';
import { IBirdRequest } from './../bird.models';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { BirdGateway } from 'src/app/domain/models/gateways/bird.gateway';
import { IBirdModel } from 'src/app/domain/models/bird.models';

@Injectable({
  providedIn: 'root'
})
export class BirdService extends BirdGateway {
  private httpHeaders = new HttpHeaders({"content-type":"application/json"});
  API_USERS : string = 'https://regres.in/api/users';

  constructor(public Http: HttpClient) {
    super();
  }

  createBird(params: IBirdRequest): Observable<IBirdModel> {
    return this.Http.post<IBirdModel>(this.API_USERS,params, {
      headers: this.httpHeaders
    });
  }
}
