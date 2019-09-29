import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeElapsedPipe } from 'src/app/pipes/time-elapsed.pipe';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@NgModule({
  declarations: [
    TimeElapsedPipe,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeElapsedPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
