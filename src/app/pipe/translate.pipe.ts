import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(value: string): unknown {
    const months = [
      'Tháng Một',
      'Tháng Hai',
      'Tháng Ba',
      'Tháng Tư',
      'Tháng Năm',
      'Tháng Sáu',
      'Tháng Bảy',
      'Tháng Tám',
      'Tháng Chín',
      'Tháng Mười',
      'Tháng Mười Một',
      'Tháng Mười Hai',
    ];

    const parts = value.split(', ');
    const month = months[parseInt(parts[0].split(' ')[1], 10) - 1];
    const year = parts[1];

    return `${month}, ${year}`;
  }
}
