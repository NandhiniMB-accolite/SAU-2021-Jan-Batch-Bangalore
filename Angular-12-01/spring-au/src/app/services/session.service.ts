import { Injectable } from '@angular/core';
import {SessionModel} from '../session/sessionmodel';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  getSessionList(){
  return [
    {
      name : 'aaa',
      trainer : 'xxx',
      isVisible: true
    },
    {
      name : 'bba',
      trainer : 'xxx',
      isVisible : false
    }
  ];
}
}
