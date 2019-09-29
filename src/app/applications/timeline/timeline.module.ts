import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { PostsComponent } from './posts/posts.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    MaterialModule
  ]
})
export class TimelineModule { }
