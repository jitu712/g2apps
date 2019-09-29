import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitaRoutingModule } from './gita-routing.module';
import { GitaHomeComponent } from './gita-home/gita-home.component';
import { MaterialModule } from 'src/app/modules/material/material.module';


@NgModule({
  declarations: [GitaHomeComponent],
  imports: [
    CommonModule,
    GitaRoutingModule,
    MaterialModule
  ]
})
export class GitaModule { }
