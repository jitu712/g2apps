import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitaHomeComponent } from './gita-home/gita-home.component';


const routes: Routes = [
  { path: '', component: GitaHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitaRoutingModule { }
