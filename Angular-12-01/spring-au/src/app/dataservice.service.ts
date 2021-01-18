import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './session/sessionmodel';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  
  constructor(private http : HttpClient) {
   
   }

  
  getData() {
    const limit = '?_limit=5';
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Todo[]>(`${url}${limit}`);
  }
}
