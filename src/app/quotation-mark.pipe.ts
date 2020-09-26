import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotationMark'
})
export class QuotationMarkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
