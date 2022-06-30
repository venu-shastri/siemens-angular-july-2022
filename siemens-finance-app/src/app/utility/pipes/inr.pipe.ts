import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inr'
})
export class InrPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return `Rs.${value}`;
  }

}
