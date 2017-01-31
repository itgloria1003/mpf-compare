import { Injectable } from '@angular/core';
import { MpfDetail } from './mpf-detail';

@Injectable()
export class ListMpfService {

  
  constructor() { }
  
  getDetails():Observable<MpfDetail[]> {
    return [{name:"abc fund" , "price": 1.23},
    {name:"AIA fund" , "price": 1.23}
    ]; 
  }
}
