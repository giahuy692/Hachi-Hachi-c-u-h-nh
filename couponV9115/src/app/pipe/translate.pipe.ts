import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) return '';

    const parts = value.split(' ');
    const month = parts.slice(0, 2).join(' ');
    const year = parts.pop();

    return `${month}, ${year}`;
  }
}
