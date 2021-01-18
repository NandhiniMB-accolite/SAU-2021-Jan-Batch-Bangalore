import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChildComponent} from './child/child.component';
import {ParentComponent } from './parent/parent.component';



const routes: Routes = [
  {
    path:'child-component',component:ChildComponent
  },
  {
    path:'parent-component', component:ParentComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
