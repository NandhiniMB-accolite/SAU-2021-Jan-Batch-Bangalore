import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { SessionService } from '../services/session.service';
import {SessionModel,Todo} from './sessionmodel';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

 
  // childItem :SessionComponent;
  sessionName: string ="First";
  isDisabled : boolean=false;
  trainerName: string="aaa";
  sessions: SessionModel[] = [];
  todos : Todo[] = [];

  //   {
  //     name : 'aaa',
  //     trainer : 'xxx'
  //   },
  //   {
  //     name : 'bba',
  //     trainer : 'xxx'
  //   }
  // ];
  
  selectedSession : SessionModel = new SessionModel();
   
  onSelect(session : SessionModel){
    alert(session);
    this.selectedSession = session;

  }

  onClickSession(){
    alert(this.trainerName);
  }
  constructor(private service:SessionService, private service1:DataserviceService){
    
  

  }

  // getApiValue(){
  //   this.data.getData().subscribe((item:any)=>{
  //     console.log(item);
  //   });
  //}
  ngOnInit(): void {
    this.sessions=this.service.getSessionList();
    this.service1.getData().subscribe((todo:any) => {
      this.todos = todo;
    });
  }

}
