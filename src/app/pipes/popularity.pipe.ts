import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popularity'
})
export class PopularityPipe implements PipeTransform {

  transform(value: number): string {
    return `${(value / 1000).toFixed(0)}k`;
  }

}
