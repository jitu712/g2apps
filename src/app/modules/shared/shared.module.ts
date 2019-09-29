import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeElapsedPipe } from 'src/app/pipes/time-elapsed.pipe';



@NgModule({
  declarations: [TimeElapsedPipe],
  imports: [
    CommonModule
  ],
  exports: [TimeElapsedPipe]
})
export class SharedModule { }
