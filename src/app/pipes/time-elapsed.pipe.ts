import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const targetDate = new Date(value);
    const currentDate = new Date();
    const elapsedTime = (currentDate.getTime() - targetDate.getTime()) / 1000;

    return this.getReadableTime(elapsedTime);
  }

  getReadableTime(seconds) {
    const years = seconds / (3600 * 24 * 365);
    const months = seconds / (3600 * 24 * 30);
    const days = seconds / (3600 * 24);
    const hours = seconds / (3600);
    const mins = seconds / 60;

    let readableTime = Math.floor(mins) + ' mins';

    // readableTime += years > 1 ? years + ' years' : '';
    return readableTime;
  }

}
