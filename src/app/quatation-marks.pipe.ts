import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quatationMarks'
})
export class QuatationMarksPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
