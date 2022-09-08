import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultClients = [];
    for (const post of value) {
      if (post.SharedKey.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultClients.push(post);
      };
    };
    return resultClients;
  }

}
