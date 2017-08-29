import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return value;
    }
    if (typeof value !== 'string') {
      return value;
    }
    return value.split('').reverse().join('');
  }

}
