import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, property: string, order: string): any {
    if (value.length === 0) {
      return value;
    }
    if (typeof order === 'undefined') {
      order = 'asc';
    }
    return value.sort(this.dynamicSort(property, order));
  }

  dynamicSort(property, order) {
    let sortOrder = 1;
    if (order === 'desc') {
      sortOrder = -1;
    }
    return function (a, b) {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }
}
