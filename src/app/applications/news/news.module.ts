import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsHomeComponent } from './news-home/news-home.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [NewsHomeComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class NewsModule { }
