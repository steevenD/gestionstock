import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      return value + ' €';
    }
  }

}
